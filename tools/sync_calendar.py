#!/usr/bin/env python3
"""Publish free call times from a Fastmail free/busy calendar link.

Reads the link from the FASTMAIL_ICS_URL environment variable and the bookable
hours from content/calendar.json, then writes data/slots.json. Run hourly by
.github/workflows/sync-calendar.yml; the site's contact form reads the result.

Only free start times inside the bookable hours are published, never event
details. The logs of a public repository are public too, so errors here must
not print the link or anything from the feed.
"""
import datetime as dt
import json
import os
import sys
import urllib.error
import urllib.request
from pathlib import Path
from zoneinfo import ZoneInfo

import icalendar
import recurring_ical_events

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "content" / "calendar.json"
OUTPUT = ROOT / "data" / "slots.json"
UTC = dt.timezone.utc
MAX_FEED_BYTES = 20 * 1024 * 1024


class SyncError(Exception):
    """A failure whose message is safe to show in public logs."""


def download(url):
    url = url.strip()
    if url.startswith("webcal://"):
        url = "https://" + url[len("webcal://"):]
    if not url.startswith("https://"):
        raise SyncError("FASTMAIL_ICS_URL must be an https:// or webcal:// link")
    request = urllib.request.Request(url, headers={"User-Agent": "calendar-sync"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            data = response.read(MAX_FEED_BYTES + 1)
    except urllib.error.HTTPError as e:
        raise SyncError(f"calendar link returned HTTP {e.code}") from None
    except (urllib.error.URLError, OSError):
        raise SyncError("could not reach the calendar link") from None
    if len(data) > MAX_FEED_BYTES:
        raise SyncError("calendar feed is too large")
    return data


def to_utc(value, tz):
    """Convert an iCalendar date or datetime; floating times use the local timezone."""
    if isinstance(value, dt.datetime):
        return (value if value.tzinfo else value.replace(tzinfo=tz)).astimezone(UTC)
    return dt.datetime.combine(value, dt.time.min, tz).astimezone(UTC)


def event_period(event, tz):
    start = event["DTSTART"].dt
    if "DTEND" in event:
        end = event["DTEND"].dt
    elif "DURATION" in event:
        end = start + event["DURATION"].dt
    elif isinstance(start, dt.datetime):
        end = start
    else:
        end = start + dt.timedelta(days=1)
    return to_utc(start, tz), to_utc(end, tz)


def freebusy_periods(component):
    """Yield busy periods of a VFREEBUSY component ("start/end" or "start/duration")."""
    props = component.get("FREEBUSY", [])
    for prop in props if isinstance(props, list) else [props]:
        if str(prop.params.get("FBTYPE", "BUSY")).upper() == "FREE":
            continue
        for period in prop.to_ical().decode().split(","):
            first, second = period.split("/")
            start = dt.datetime.strptime(first, "%Y%m%dT%H%M%SZ").replace(tzinfo=UTC)
            if second.startswith(("P", "+P", "-P")):
                end = start + icalendar.vDuration.from_ical(second)
            else:
                end = dt.datetime.strptime(second, "%Y%m%dT%H%M%SZ").replace(tzinfo=UTC)
            yield start, end


def busy_periods(feed, first_day, last_day, tz):
    """Return every busy (start, end) in UTC. A free/busy link may use either format."""
    if b"BEGIN:VCALENDAR" not in feed[:1024]:
        raise SyncError("calendar link did not return iCalendar data; use the .ics link")
    calendar = icalendar.Calendar.from_ical(feed)
    busy = []
    # One day of margin on each side, for events that cross a timezone boundary.
    window = (first_day - dt.timedelta(days=1), last_day + dt.timedelta(days=2))
    for event in recurring_ical_events.of(calendar).between(*window):
        if str(event.get("TRANSP", "OPAQUE")).upper() == "TRANSPARENT":
            continue
        if str(event.get("STATUS", "")).upper() == "CANCELLED":
            continue
        busy.append(event_period(event, tz))
    for component in calendar.walk("VFREEBUSY"):
        busy.extend(freebusy_periods(component))
    return busy


def free_slots(busy, config, today):
    tz = ZoneInfo(config["timezone"])
    length = dt.timedelta(minutes=config["slot_minutes"])
    buffer = dt.timedelta(minutes=config["buffer_minutes"])
    day_start = dt.time.fromisoformat(config["day_start"])
    day_end = dt.time.fromisoformat(config["day_end"])
    slots = []
    for offset in range(config["horizon_days"] + 1):
        day = today + dt.timedelta(days=offset)
        if day.isoweekday() not in config["weekdays"]:
            continue
        # Step in local wall-clock time so opening hours stay put across DST changes.
        local = dt.datetime.combine(day, day_start)
        closing = dt.datetime.combine(day, day_end)
        while local + length <= closing:
            start = local.replace(tzinfo=tz).astimezone(UTC)
            end = start + length
            if not any(b_start < end + buffer and start - buffer < b_end for b_start, b_end in busy):
                slots.append(start.strftime("%Y-%m-%dT%H:%M:%SZ"))
            local += length
    return slots


def build(feed, config, today):
    """Build data/slots.json. It changes only when availability or the date changes."""
    tz = ZoneInfo(config["timezone"])
    last_day = today + dt.timedelta(days=config["horizon_days"])
    busy = busy_periods(feed, today, last_day, tz)
    return {
        "generated": today.isoformat(),
        "minutes": config["slot_minutes"],
        "notice_hours": config["notice_hours"],
        "timezone": config["timezone"],
        "slots": free_slots(busy, config, today),
    }


def main():
    url = os.environ.get("FASTMAIL_ICS_URL", "")
    if not url.strip():
        raise SyncError("FASTMAIL_ICS_URL is not set")
    config = json.loads(CONFIG.read_text(encoding="utf-8"))
    today = dt.datetime.now(ZoneInfo(config["timezone"])).date()
    result = build(download(url), config, today)
    OUTPUT.parent.mkdir(exist_ok=True)
    OUTPUT.write_text(json.dumps(result, indent=1) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(ROOT)} ({len(result['slots'])} free slots)")


if __name__ == "__main__":
    try:
        main()
    except SyncError as e:
        sys.exit(f"sync_calendar: {e}")
    except Exception as e:  # Never print the message or a traceback: they can quote the feed.
        sys.exit(f"sync_calendar: failed with {type(e).__name__}")
