# Binq Website — Project Notes

## What This Project Is
Frontend website for **Binq Dessert** (binqdessert.com) — a Malaysian bingsu shop. Built by Eric Cheong as a side project. Rainey is now taking over updates.

GitHub repo: https://github.com/25Ericcheong/binq

---

## How to Run the Project

```bash
cd "/Users/Rainey/Desktop/Claude-Workspace/Binq Website"
npm run dev
```

Then open http://localhost:5173 in your browser to preview changes.

To push changes live to the website:
```bash
git add .
git commit -m "Describe what you changed"
git push
```

GitHub Actions will automatically deploy to binqdessert.com after pushing.

---

## Tech Stack
- **Vue 3** + **TypeScript** — the framework
- **Vite** — builds and runs the project
- **TailwindCSS** — styling (using custom brand colour classes)
- **Vue Router** — handles page navigation
- **Pinia** — state management (used for menu)

---

## Brand Guidelines

**Tagline:** Bingsu, the Malaysian way.

**Colours** (defined in tailwind.config.js):
- `orangebq` — #f05b1b (primary orange)
- `darkorangebq` — #d26624 (dark orange, used for text)
- `creamwhitebq` — #fff5ea (light cream)
- `creamyellowbq` — #fbe8b5 (warm yellow, used for section backgrounds)
- `dullorangebq` — #f59b3e (muted orange)

**Fonts** (updated in src/input.css):
- Heading: **Fraunces** (warm, expressive serif)
- Body: **Plus Jakarta Sans** (modern, clean)
- Use class `header-font` for headings, `body-font` for body text

**Brand voice:** Confident, warm, Malaysian. Not corporate. Tells the real story.

**Hero flavours (always on menu):** Roasted Soybean Oolong, Pistachio

---

## Key Files

| File | What it does |
|------|-------------|
| `index.html` | HTML shell, meta tags, Behold widget script |
| `src/input.css` | Fonts and colour CSS variables |
| `tailwind.config.js` | Brand colours and screen breakpoints |
| `src/views/home.vue` | Homepage — assembles all sections |
| `src/views/menu.vue` | Menu page |
| `src/components/about-us.vue` | Our story section |
| `src/components/new-offerings.vue` | What's New section with Instagram feed |
| `src/components/footer.vue` | Footer with contact info and links |
| `src/components/nav-bar.vue` | Top navigation |
| `src/components/menu/menu-items.ts` | Menu data (items, prices, descriptions) |
| `static/` | Public images and assets |
| `src/assets/` | Component images (bingsus, drinks, toppings, logo) |

---

## Instagram Feed
Using **Behold.so** to embed live Instagram posts.
- Feed ID: `s97rR`
- Script loaded in `index.html` `<head>`: `<script type="module" src="https://w.behold.so/widget.js"></script>`
- Widget used in components as: `<behold-widget feed-id="s97rR" />`
- Instagram: https://www.instagram.com/binqdessert/

---

## Google Reviews (Automated)
- Reviews fetched weekly via GitHub Actions (`update-reviews.yml`)
- Script: `scripts/fetch-reviews.js`
- Output: `src/data/google-reviews.json` (committed to repo, read at build time)
- GitHub Secrets needed: `GOOGLE_PLACES_API_KEY`, `PLACE_IDS`
- **API key restriction:** API restrictions → Places API (New) only. No HTTP referrer restriction needed (server-side only).
- To trigger manually: GitHub repo → Actions → "Update Google Reviews" → Run workflow

---

## Changes Made So Far

### ✅ Done
- **Fonts updated** — changed from Raleway/Source Sans 3 to Fraunces/Plus Jakarta Sans
- **Our Story rewritten** — new copy in `src/components/about-us.vue`
- **New Offerings section** — Instagram feed via Behold widget
- **Removed phone number 0169007070** — from footer and JSON-LD schema
- **Feedback email** — updated to binqdessert@gmail.com
- **Menu updated** — all new items, pricing, renamed items per May 2026 menu photo
- **Find Us section** — new homepage section with all 5 outlet cards and maps links
- **Google Reviews automation** — GitHub Actions workflow fetches weekly, zero cost

### ⏳ Still To Do
- [ ] **Add photos** for new bingsu items (Thai Milk Tea, Pistachio, Tiramisu, Soybean Longan, Matcha Creme Brulee, Dark Choc Pistachio Kunafa) — add to `src/assets/images/menu/bingsus/`
- [ ] **Verify S prices** for Matcha Creme Brulee (RM22?) and Dark Choc Pistachio Kunafa (RM21?) in `menu-items.ts`
- [ ] **Catering section** — new section with downloadable catering PDF
- [ ] **Regenerate Google API key** — original was shared; regenerate at console.cloud.google.com and update GitHub Secret

---

## Pending: Remove Phone Number
Paste this into Claude Code to finish removing the phone number:

```
Remove the phone number 0169007070 from two places:
1. src/components/footer.vue — remove the <p class="pt-2">0169007070</p> line
2. index.html — remove the "telephone": "0169007070" line from the JSON-LD script
```

---

## Outlet Locations (current — 5 outlets)

| Outlet | Google Maps | Place ID |
|--------|-------------|----------|
| Desa Sri Hartamas | https://share.google/rTjNqgakWm7zmJuGe | ChIJJWBzJfFJzDERq5l_pQO6vTs |
| SS15, Subang Jaya | https://share.google/ePjDMj9NlJb2gqDq1 | ChIJowwocABNzDER0rO2kXd7FCA |
| SS2, Petaling Jaya | https://share.google/QkxXFiHSPKRwaYhTu | ChIJpQCLo_5JzDERZLjlJsg42U8 |
| Damansara Uptown | https://share.google/ml9FNXW9d7f2KjGOQ | ChIJL_jESoJJzDERIhJtRVJHKvs |
| Taman Segar, Cheras | https://share.google/rOz3Vn5V7U1X9V51T | ChIJ13IMeK01zDERBUFT6UDVpGw |

PLACE_IDS secret value (for GitHub Actions):
ChIJowwocABNzDER0rO2kXd7FCA,ChIJpQCLo_5JzDERZLjlJsg42U8,ChIJ13IMeK01zDERBUFT6UDVpGw,ChIJL_jESoJJzDERIhJtRVJHKvs,ChIJJWBzJfFJzDERq5l_pQO6vTs

---

## Contact
- Email: binqdessert@gmail.com
- Instagram: https://www.instagram.com/binqdessert/
- Facebook: https://www.facebook.com/profile.php?id=100095187967073
