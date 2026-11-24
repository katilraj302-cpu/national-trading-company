# National Trading Company — Website

Live: https://katilraj302-cpu.github.io/national-trading-company/

Static single-page website for National Trading Company, SCO No. 2, Green City,
Dhandra Road, Ludhiana. Phone / WhatsApp: 8968925799.

## Name shown on a phone

- **Browser tab:** “National Trading Company | Hardware, Plywood & Paint in Ludhiana”
- **WhatsApp / Facebook link preview:** same title, with hardware photo
- **Add to Home Screen:** “NTC” (full name stays “National Trading Company” in `manifest.webmanifest`)

## Files

- `index.html` — page content (products, rates, about, contact, map)
- `styles.css` — design and responsive layout
- `script.js` — mobile menu, scroll reveal, WhatsApp rate-request form
- `assets/ntc-logo.svg` — vector logo
- `assets/hardware.jpg`, `assets/plywood.jpg`, `assets/paint.jpg` — product photos
  (Wikimedia Commons; attribution in the site footer)

## Easy edits

- **Phone / WhatsApp:** search for `918968925799` in `index.html` and `script.js`.
- **Address:** search for `SCO No. 2, Green City, Dhandra Road, Ludhiana`.
- **Exact map pin:** in `index.html`, replace the iframe `src` in `.map-embed` with your
  Google Maps share/embed link.
- **Rates:** the table intentionally says “On request” — add real prices in the
  `.rate-table` in `index.html` when available.
- **Product photos:** replace `assets/hardware.jpg`, `assets/plywood.jpg` and
  `assets/paint.jpg` directly (filenames stay the same, no HTML edit needed).
- **Phone number:** kept out of the header and hero on purpose; it appears in the
  contact section, footer and the floating call button.

## Deploy

```sh
git add .
git commit -m "Update site"
git push
```

GitHub Pages publishes `main` automatically.
