#!/usr/bin/env python3
"""Tests for sync_calendar.py. Run: python3 tools/test_sync_calendar.py"""
import datetime as dt
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import sync_calendar as sc

CONFIG = {
    "timezone": "Europe/Warsaw",
    "weekdays": [1, 2, 3, 4, 5],
    "day_start": "09:00",
    "day_end": "11:00",
    "slot_minutes": 30,
    "buffer_minutes": 0,
    "notice_hours": 48,
    "horizon_days": 6,
}
MONDAY = dt.date(2026, 11, 9)  # Warsaw is UTC+1 on this date
MON_ALL = ["08:00", "08:30", "09:00", "09:30"]


def feed(*components):
    lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//test//EN", *components, "END:VCALENDAR"]
    return "\r\n".join(lines).encode()


def event(*props):
    return "\r\n".join(["BEGIN:VEVENT", "UID:x@test", "DTSTAMP:20261101T000000Z", *props, "END:VEVENT"])


def utc_times(result, day):
    prefix = day.isoformat() + "T"
    return [s[11:16] for s in result["slots"] if s.startswith(prefix)]


class Slots(unittest.TestCase):
    def monday(self, *components, config=CONFIG):
        return utc_times(sc.build(feed(*components), config, MONDAY), MONDAY)

    def test_empty_calendar_offers_every_slot_on_weekdays_only(self):
        result = sc.build(feed(), CONFIG, MONDAY)
        self.assertEqual(utc_times(result, MONDAY), MON_ALL)
        self.assertEqual(len(result["slots"]), 5 * 4)
        self.assertEqual(utc_times(result, dt.date(2026, 11, 14)), [])

    def test_event_blocks_overlapping_slots_only(self):
        busy = event("DTSTART:20261109T083000Z", "DTEND:20261109T090000Z")
        self.assertEqual(self.monday(busy), ["08:00", "09:00", "09:30"])

    def test_timezone_of_event_is_respected(self):
        busy = event("DTSTART;TZID=America/New_York:20261109T030000", "DTEND;TZID=America/New_York:20261109T033000")
        self.assertEqual(self.monday(busy), ["08:30", "09:00", "09:30"])

    def test_floating_time_uses_local_timezone(self):
        busy = event("DTSTART:20261109T090000", "DTEND:20261109T093000")
        self.assertEqual(self.monday(busy), ["08:30", "09:00", "09:30"])

    def test_duration_is_used_when_there_is_no_end(self):
        busy = event("DTSTART:20261109T080000Z", "DURATION:PT1H")
        self.assertEqual(self.monday(busy), ["09:00", "09:30"])

    def test_all_day_event_blocks_the_whole_day(self):
        busy = event("DTSTART;VALUE=DATE:20261109", "DTEND;VALUE=DATE:20261110")
        result = sc.build(feed(busy), CONFIG, MONDAY)
        self.assertEqual(utc_times(result, MONDAY), [])
        self.assertEqual(utc_times(result, dt.date(2026, 11, 10)), MON_ALL)

    def test_free_and_cancelled_events_do_not_block(self):
        free = event("DTSTART:20261109T080000Z", "DTEND:20261109T090000Z", "TRANSP:TRANSPARENT")
        cancelled = event("DTSTART:20261109T090000Z", "DTEND:20261109T100000Z", "STATUS:CANCELLED")
        self.assertEqual(self.monday(free, cancelled), MON_ALL)

    def test_recurring_event_and_exception_date(self):
        weekly = event(
            "DTSTART:20261102T080000Z", "DTEND:20261102T083000Z",
            "RRULE:FREQ=DAILY;COUNT=30", "EXDATE:20261110T080000Z",
        )
        result = sc.build(feed(weekly), CONFIG, MONDAY)
        self.assertEqual(utc_times(result, MONDAY), ["08:30", "09:00", "09:30"])
        self.assertEqual(utc_times(result, dt.date(2026, 11, 10)), MON_ALL)

    def test_buffer_keeps_a_gap_around_events(self):
        busy = event("DTSTART:20261109T090000Z", "DTEND:20261109T093000Z")
        self.assertEqual(self.monday(busy, config={**CONFIG, "buffer_minutes": 15}), ["08:00"])

    def test_vfreebusy_feed(self):
        component = "\r\n".join([
            "BEGIN:VFREEBUSY", "DTSTAMP:20261101T000000Z",
            "FREEBUSY:20261109T080000Z/20261109T083000Z,20261109T090000Z/PT30M",
            "FREEBUSY;FBTYPE=FREE:20261109T093000Z/20261109T100000Z",
            "END:VFREEBUSY",
        ])
        self.assertEqual(self.monday(component), ["08:30", "09:30"])

    def test_opening_hours_follow_local_time_across_dst(self):
        # Clocks go back in Warsaw on 25 Oct 2026: 09:00 local is 07:00 UTC before, 08:00 UTC after.
        config = {**CONFIG, "horizon_days": 3}
        result = sc.build(feed(), config, dt.date(2026, 10, 23))
        self.assertEqual(utc_times(result, dt.date(2026, 10, 23))[0], "07:00")
        self.assertEqual(utc_times(result, dt.date(2026, 10, 26))[0], "08:00")

    def test_output_contains_no_event_details(self):
        busy = event("SUMMARY:Secret client", "DTSTART:20261109T080000Z", "DTEND:20261109T083000Z")
        self.assertNotIn("Secret", str(sc.build(feed(busy), CONFIG, MONDAY)))

    def test_html_page_is_rejected_instead_of_showing_everything_free(self):
        with self.assertRaises(sc.SyncError):
            sc.build(b"<!doctype html><title>Calendar</title>", CONFIG, MONDAY)


if __name__ == "__main__":
    unittest.main()
