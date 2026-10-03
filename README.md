# AWT-website-embedd
Freelance website for embedded work: embedded development, equipment / production
testing, hosted OTA update server and telemetry. English and Polish (switch in
the top bar; defaults to the browser language).

Static site, no build step:

    index.html   page content (English text lives here)
    styles.css   styles
    main.js      Polish translations, language switch, contact form
    favicon.svg

The contact form opens the visitor's mail client with a prefilled message to
the address in `main.js` (`EMAIL`) — no backend needed.

Run locally:

    python3 -m http.server 8765    # then open http://localhost:8765

Deploy: any static host (GitHub Pages, Netlify, Cloudflare Pages, nginx).
