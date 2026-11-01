# AWT-website-embedd
Freelance website for electronic product development, written for customers:
end to end from the customer's problem through design, development, testing,
production and maintenance (remote updates, monitoring). English at `/`, Polish at
`/pl/` (switch in the top bar; first visit follows the browser language).

Static site, no build step at deploy time:

    index.html   page content (English text lives here) — the source for both languages
    i18n/pl.json Polish text, keyed by the `data-i18n` attributes in index.html
    pl/index.html GENERATED Polish page — do not edit by hand
    tools/build_pl.py generates pl/index.html
    content/services.json  text of the per-service pages (EN + PL)
    tools/build_services.py generates services/*/ (EN), pl/uslugi/*/ (PL)
                           and sitemap.xml — do not edit those by hand
    styles.css   styles
    main.js      theme toggle, language preference, contact form
    privacy.html privacy policy (EN/PL, own small language switch)
    fonts/       self-hosted IBM Plex (Latin + Latin Extended), OFL licence
    og-image.png link preview image (1200x630)
    robots.txt, sitemap.xml
    favicon.svg

The contact form opens the visitor's mail client with a prefilled message to
the address in `main.js` (`EMAIL`) — no backend needed.

After changing `index.html` or `i18n/pl.json`, regenerate the Polish page and
commit both:

    python3 tools/build_pl.py
    python3 tools/build_services.py   # always run this one last

`build_services.py` also writes `sitemap.xml` with a `lastmod` date per page.
Dates live in `content/lastmod.json` and move only when a page's content
actually changes, so commit that file too. Service pages show the same date as
"Last updated". In `content/services.json` body text, `[text](s2)` links to
another service page by its key.

Each service has its own page (e.g. /services/production-testing/ and
/pl/uslugi/testowanie-elektroniki/), linked from the service blocks and footer
on the home page. Slugs live in `content/services.json`; changing one changes
the URL, so avoid that once the pages are indexed.

The Polish page has its own title/description (in `tools/build_pl.py`), and
both pages carry `hreflang` links so Google shows the right language.
Structured data (schema.org business info) is in the `<head>` of `index.html`.

Run locally:

    python3 -m http.server 8765    # then open http://localhost:8765

Deploy: any static host (GitHub Pages, Netlify, Cloudflare Pages, nginx).

Live address: https://www.awt-embedded.com (also set in `index.html`,
`privacy.html`, `robots.txt`, `tools/build_services.py`).

Notes:

- Business name, NIP and address appear in the footer of `index.html`
  and in both language versions of `privacy.html`.
- If you add analytics or a form service later, update `privacy.html`.

## TODO

- **Visitor analytics with GoatCounter** (free, cookieless, no consent
  banner needed). GitHub Pages provides no visitor stats.
  1. Sign up at https://www.goatcounter.com and pick a code
     (e.g. `awt-embedded` → dashboard at `awt-embedded.goatcounter.com`).
  2. Add before `</body>` in `index.html` and `privacy.html`:

         <script data-goatcounter="https://CODE.goatcounter.com/count"
                 async src="//gc.zgo.at/count.js"></script>

  3. Update "Cookies and tracking" in `privacy.html` (EN and PL), which
     currently says the site uses no analytics.
- Add the domain to Google Search Console (DNS TXT verification, no code
  change) and submit `sitemap.xml` (it lists both `/` and `/pl/`).
- Create a Google Business Profile (Maps / local results for Barlinek,
  Gorzów, Szczecin).
- Get listed/linked: LinkedIn company page, Panorama Firm, pkt.pl, and ask
  clients (Omni3D, LemPro) for a link or reference.
