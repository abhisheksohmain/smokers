# The Smoke Hauz – Sheesha Lounge (React + Vite)

## Run locally
```bash
npm install
npm run dev
```

## Edit business info
All address, phone, WhatsApp, hours and Instagram values live in `src/data/siteData.js`.
Replace the `TODO` items (opening hours, Instagram) and the sample reviews.

## Structure
- `src/pages/` – Home, About, Menu, Gallery, Contact (each page only assembles sections)
- `src/components/<page>/` – one `.jsx` + one `.css` per section
- `src/components/common/` – Header, Footer, Button, PageBanner, CTABand, WhatsAppFloat
- `src/styles/global.css` – colour tokens, fonts, shared `.shine` reflection and `.card`

## Push to GitHub and deploy
```bash
git init
git add .
git commit -m "The Smoke Hauz website"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```
Then in the repo: Settings → Pages → Source: GitHub Actions. The included workflow builds and publishes on every push to `main`.
