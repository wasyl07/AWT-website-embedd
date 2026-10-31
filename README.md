# AWT-website-embedd
Freelance website for electronic product development, written for customers:
end to end from the customer's problem through design, development, testing,
production and maintenance (remote updates, monitoring). English and Polish (switch in
the top bar; defaults to the browser language).

Static site, no build step:

    index.html   page content (English text lives here)
    styles.css   styles
    main.js      Polish translations, language switch, contact form
    privacy.html privacy policy (EN/PL, own small language switch)
    fonts/       self-hosted IBM Plex (Latin + Latin Extended), OFL licence
    og-image.png link preview image (1200x630)
    robots.txt, sitemap.xml
    favicon.svg

The contact form opens the visitor's mail client with a prefilled message to
the address in `main.js` (`EMAIL`) — no backend needed.

Run locally:

    python3 -m http.server 8765    # then open http://localhost:8765

Deploy: any static host (GitHub Pages, Netlify, Cloudflare Pages, nginx).

Live address: https://www.awt-embedded.com (also set in `index.html`,
`privacy.html`, `robots.txt`, `sitemap.xml`).

Notes:

- Business name, NIP and address appear in the footer of `index.html`
  and in both language versions of `privacy.html`.
- If you add analytics or a form service later, update `privacy.html`.
