# National Trading Company — Website

Live: https://katilraj302-cpu.github.io/national-trading-company/

Static single-page website for National Trading Company, SCO No. 2, Green City,
Dhandra Road, Ludhiana. Phone / WhatsApp: 8968925799.

## Files

- `index.html` — page content (products, rates, about, contact, map)
- `styles.css` — design and responsive layout
- `script.js` — mobile menu, scroll reveal, WhatsApp rate-request form
- `assets/*.svg` — vector logo and product illustrations (replace with real photos when available)

## Easy edits

- **Phone / WhatsApp:** search for `918968925799` in `index.html` and `script.js`.
- **Address:** search for `SCO No. 2, Green City, Dhandra Road, Ludhiana`.
- **Exact map pin:** in `index.html`, replace the iframe `src` in `.map-embed` with your
  Google Maps share/embed link.
- **Rates:** the table intentionally says “On request” — add real prices in the
  `.rate-table` in `index.html` when available.
- **Product photos:** replace `assets/hardware.svg`, `assets/plywood.svg` and
  `assets/paint.svg` with real images and update the `<img src>` values.

## Deploy

```sh
git add .
git commit -m "Update site"
git push
```

GitHub Pages publishes `main` automatically.
