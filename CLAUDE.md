# CLAUDE.md

## Rule: English and Polish must always match

The English and Polish versions of the site must always have the same layout and
the same information. Every change to one language goes into the other in the
same change: added, removed or reworded text, sections, form fields, links,
contact details, dates and prices. Never leave text untranslated, and never
leave content in one language only.

Where each language lives:

- Home page: `index.html` is the English source. `i18n/pl.json` holds the Polish
  text, keyed by `data-i18n`. `pl/index.html` is generated; never edit it by hand.
- Service pages: the `en` and `pl` entries in `content/services.json`.
- Texts set by JavaScript: the `en` and `pl` objects in `MSG` in `main.js`.
- Privacy policy: the two `<article>`s in `privacy.html` (`class="en"` and
  `class="pl"`), including the "Last updated" dates.

After any change, regenerate the pages (`python3 tools/build_pl.py`, then
`python3 tools/build_services.py`). Then check that both language versions
match. Removed text must also be gone from the Polish side: delete the key
from `i18n/pl.json`, or the build lists it as unused.

Polish copy uses a formal, concise style.
