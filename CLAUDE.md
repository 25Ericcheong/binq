# Binq Website — Project Notes

## What This Project Is
Frontend website for **Binq Dessert** (binqdessert.com) — a Malaysian bingsu café, 5 outlets in Klang Valley. Originally built by Eric Cheong as a side project. Rainey (co-founder) now owns updates.

GitHub repo: https://github.com/25Ericcheong/binq

---

## ⚠️ Current Git State (read this first)
All work below lives on local branch **`feat/website-refresh`**, NOT yet pushed to GitHub. This sandbox has no GitHub credentials configured, so every push attempt fails with `could not read Username for 'https://github.com'`. The repo owner (Eric, admin access) needs to either:
1. Run `git push -u origin feat/website-refresh` from a machine with GitHub auth, then open a PR, OR
2. Add `GOOGLE_PLACES_API_KEY` + `PLACE_IDS` secrets (see below) before/after merging.

Run `git log --oneline feat/website-refresh -15` to see what's committed. `master` is one commit behind `feat/website-refresh`'s base.

---

## How to Run the Project
```bash
cd "/Users/Rainey/Desktop/Claude-Workspace/Binq Website"
npm run dev
```
Open the printed localhost URL (port 8080 or 8081 typically — `npm run dev` auto-picks an open port).

To deploy: push to `master` → GitHub Actions builds + deploys to binqdessert.com automatically (`.github/workflows/deploy-to-prod.yml`).

---

## Tech Stack
Vue 3 + TypeScript + Vite + TailwindCSS + Vue Router + Pinia (cart store, increasingly vestigial — see Online Ordering below).

---

## Brand Guidelines
- **Tagline:** "Your local fully flavoured bingsu cafe" (from investor deck) / "Bingsu, the Malaysian way."
- **Colours** (`tailwind.config.js`): `orangebq` #f05b1b · `darkorangebq` #d26624 · `creamwhitebq` #fff5ea · `creamyellowbq` #fbe8b5 · `dullorangebq` #f59b3e
- **Fonts:** Heading = Fraunces (`header-font`), Body = Plus Jakarta Sans (`body-font`)
- **Real founder story** (used in `about-us.vue`): Lovy Chong & Rainey Yong, frustrated by overly sweet/generic "jelak" bingsu, built Binq around fragrant tea bases + local-rooted toppings. Source: `Binq Investment Ask 3Apr26 (1).pdf` pages 1-2 (gitignored — confidential, do NOT pull anything beyond pages 1-2 onto the public site; rest is financial/investor data).
- **Team** (not yet on site, could add as a blurb if asked): Rainey Yong (Operations & R&D, pharmacist background), Lovy Chong (Strategy & Finance), Andrew Hong (Head of Marketing, ex-Inside Scoop 9yrs — explains why Inside Scoop's layout was the design reference).

---

## Design Direction
Site was audited against **insidescoop.com.my** and shifted from "photo-led storytelling" toward "tight, scannable, conversion-ready":
- Hero, About, and Product sections were all shrunk and decluttered (see Session History).
- Nav bar (`nav-bar.vue`) still minimal (2 floating icon buttons) — not yet revamped to Inside Scoop's functional style (search/account/cart). Not done.
- **No "Order Now" button anywhere yet** — Rainey will provide the online ordering platform link in a future session; wire it into hero + Catering section CTA once received.

---

## Key Files

| File | What it does |
|------|-------------|
| `index.html` | HTML shell, meta tags, JSON-LD schema, Behold widget script |
| `src/views/home.vue` | Homepage — section order: Hero → About → NewOfferings → Product → Catering → OurMentions → Feedback → FindUs → Footer |
| `src/views/menu.vue` → `src/components/menu/menu.vue` | Menu page, 6 tabs: Bingsu, Drinks, Topping, Dubai Chewy Cookie, Croffle, Iced Chocolate |
| `src/components/menu/menu-items.ts` | All menu data — **sourced from live StoreHub POS export**, not guesses |
| `src/components/header/main-header.vue` | Hero — tagline + Binq wordmark + 3-stat trust strip (5 Outlets/4.9★/13 Flavours) |
| `src/components/about-us.vue` | "Binq's Story" — compact, real founder story |
| `src/components/product.vue` | "Discover Binq" — 2x2 icon value-prop grid + 1 photo |
| `src/components/catering.vue` | Catering section — package details, photo gallery, MS Form link |
| `src/components/find-us.vue` | 5-outlet card grid, last section before footer |
| `src/components/our-mentions.vue` | "Binq Buzzing" — live Google reviews + 3 real customer photos |
| `src/components/new-offerings.vue` | Instagram feed via Behold widget |
| `scripts/fetch-reviews.js` | Pulls Google reviews + aggregate rating, writes `src/data/google-reviews.json` |
| `.github/workflows/update-reviews.yml` | Weekly cron (Mon 9am KL) — fetch reviews → build → deploy |

---

## Menu Data — Source of Truth
`src/components/menu/menu-items.ts` was rebuilt from a real StoreHub POS export (`Binq Menu/*.xlsx`, gitignored — internal data, re-export and re-read if menu changes again). Contains:
- **13 bingsus** with accurate regular+small prices and POS-verified topping pairings
- **7 drinks** (renamed: "Da Hong Pao Roasted Milk Tea", "Pure Green Tea")
- **25 toppings** with current prices
- **3 new categories added as info-only (no cart logic)**: Dubai Chewy Cookie (8 SKUs), Croffle, Iced Chocolate — these show "Order via our online ordering platform" instead of Add Item, since real ordering is moving off-site soon.
- Oat milk add-on price fixed: was +RM1, now +RM2 (per POS).

**Still missing photos** (shows broken image until added to `src/assets/images/menu/bingsus/` or relevant folder): Thai Milk Tea, Pistachio, Tiramisu, Soybean Longan, Matcha Crème Brulee, Dark Choc Pistachio Kunafa, all Dubai Cookie/Croffle/Iced Chocolate items, and several new toppings (Ondeh-Ondeh Mochi, Chocolate Butter Crisp, Glazed Pistachio Crumbs, Mascarpone Cream, Longan, Crème Brulee Cream Cheese, Pistachio Kunafa, Mango Sauce). Rainey will share photos in a future session.

---

## Google Reviews (Automated, Working)
- Weekly GitHub Actions fetch (`update-reviews.yml` + `scripts/fetch-reviews.js`) → `src/data/google-reviews.json` → read by `our-mentions.vue`
- Computes a **weighted aggregate rating + count** across all 5 outlets (currently ~4.9★ / ~4,600+ reviews) — displayed live, replacing a stale hardcoded "4.7 / 5.0 over 100+ reviews"
- 3 customer photos (not just 1) sourced from Google Places photos API, hand-picked for quality/no-bystanders, each links to its Google Maps review page
- **GitHub Secrets still needed** (blocks the *automated* weekly refresh only — manual local fetch already works and reviews are live as of last fetch): `GOOGLE_PLACES_API_KEY`, `PLACE_IDS`. Needs **Admin** repo access (Rainey only has Write) — Eric must add these.
- **API key restrictions:** Application restrictions → **None** (server-side, no browser referrer). API restrictions → Places API (New) only. Billing must be active (real payment method, not just free trial) or the `reviews`/`photos` fields silently return empty.
- ⚠️ The API key was shared in chat during setup — recommend regenerating it in Google Cloud Console and updating the GitHub Secret.
- To trigger manually once secrets exist: repo → Actions → "Update Google Reviews" → Run workflow.

PLACE_IDS value: `ChIJowwocABNzDER0rO2kXd7FCA,ChIJpQCLo_5JzDERZLjlJsg42U8,ChIJ13IMeK01zDERBUFT6UDVpGw,ChIJL_jESoJJzDERIhJtRVJHKvs,ChIJJWBzJfFJzDERq5l_pQO6vTs`

| Outlet | Google Maps | Place ID |
|--------|-------------|----------|
| Desa Sri Hartamas | share.google/rTjNqgakWm7zmJuGe | ChIJJWBzJfFJzDERq5l_pQO6vTs |
| SS15, Subang Jaya | share.google/ePjDMj9NlJb2gqDq1 | ChIJowwocABNzDER0rO2kXd7FCA |
| SS2, Petaling Jaya | share.google/QkxXFiHSPKRwaYhTu | ChIJpQCLo_5JzDERZLjlJsg42U8 |
| Damansara Uptown | share.google/ml9FNXW9d7f2KjGOQ | ChIJL_jESoJJzDERIhJtRVJHKvs |
| Taman Segar, Cheras | share.google/rOz3Vn5V7U1X9V51T | ChIJ13IMeK01zDERBUFT6UDVpGw |

---

## Instagram Feed
Behold.so widget — feed ID `i4JCIdZM3CZgHNacmLAL` (the old ID `s97rR` died — feeds.behold.so returned 404; reconnect Behold→Instagram if this happens again). Used in `new-offerings.vue`. Loader script in `index.html` `<head>`.

---

## Catering
`src/components/catering.vue` — package details (sizes/flavours/toppings) extracted from `Catering Package.JPG` (gitignored, internal), 4 real event photos (`src/assets/images/catering/`), CTA links to Rainey's Microsoft Form for enquiries. Photos 1&2 highlighted larger (right column), 3&4 smaller (left column, height-matched via flex stretch).

---

## ⏳ Still To Do
- [ ] **Push `feat/website-refresh` and open a PR** — see Git State section above
- [ ] **Online ordering link** — Rainey will share it; wire into hero CTA (currently absent) and/or Catering CTA
- [ ] **Add menu/topping photos** — see list above
- [ ] **Add `GOOGLE_PLACES_API_KEY` + `PLACE_IDS` GitHub Secrets** — needs Eric (Admin access)
- [ ] **Regenerate Google API key** (was shared in chat) and update the secret
- [ ] **Nav bar revamp** — still minimal; Inside Scoop comparison flagged this but not yet actioned
- [ ] Optional: small "Meet the Team" blurb (Rainey/Lovy/Andrew) — discussed, not requested yet

---

## Contact
- Email: binqdessert@gmail.com · Instagram: instagram.com/binqdessert · Facebook: facebook.com/profile.php?id=100095187967073
