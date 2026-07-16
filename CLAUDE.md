# Binq Website — Project Notes

## What This Project Is
Frontend website for **Binq Dessert** (binqdessert.com) — a Malaysian bingsu café, 6 outlets in Klang Valley. Originally built by Eric Cheong. Rainey Yong (co-founder, Operations & R&D) owns all updates.

GitHub repo: https://github.com/25Ericcheong/binq

---

## How to Run the Project
```bash
cd "/Users/Rainey/Library/Mobile Documents/com~apple~CloudDocs/Claude-Workspace/Binq Website"
npm run dev
```
Open the printed localhost URL (usually port 8080). To deploy: push to `master` → GitHub Actions builds + deploys to binqdessert.com (`.github/workflows/deploy-to-prod.yml`).

⚠️ **Path note:** Project lives under `~/Library/Mobile Documents/com~apple~CloudDocs/Claude-Workspace/Binq Website` (iCloud Drive). Always use that full path with quotes.

---

## Current Git State

Active branch: **`douala-preview`** (local, not yet pushed to GitHub).

Recent work on this branch covers a full site architecture overhaul (see Session History below). Push requires GitHub credentials — Eric (repo admin) must push and open the PR when ready.

---

## Tech Stack
Vue 3 + TypeScript + Vite + TailwindCSS + Vue Router + Pinia

---

## Brand Guidelines
- **Tagline:** "Bingsu, the Malaysian way."
- **Colours** (`tailwind.config.js`): `orangebq` #f05b1b · `darkorangebq` #d26624 · `creamwhitebq` #fff5ea · `creamyellowbq` #fbe8b5 · `dullorangebq` #f59b3e
- **Fonts:** Heading = Fraunces (`header-font`), Body = Plus Jakarta Sans (`body-font`)
- **Founders:** Lovy Chong (Strategy & Finance) + Rainey Yong (Operations & R&D, pharmacist background)
- **Team:** Andrew Hong (Head of Marketing, ex-Inside Scoop 9yrs)

---

## Site Architecture (current state)

### Routes (`src/router/router.ts`)
```
/           → redirects to /bingsu
/bingsu     → bingsu-page.vue  (SEO landing page for "Bingsu in KL")
/menu       → menu.vue         (full interactive menu, eager loaded)
/about-us   → about-page.vue
/catering   → catering-page.vue
/find-us    → find-us-page.vue
```
- All page-level routes are lazy-loaded except `/menu`
- `router.afterEach` fires `gtag("config", "G-JK4NSKLNWE", { page_path })` for GA page tracking
- `PATHS` object exported from `router.ts` — import it in components to avoid string typos
- ⚠️ **`/` redirects to `/bingsu`, so `bingsu-page.vue` IS the homepage as far as Rainey (or anyone) is concerned.** When Rainey says "the home page," she means this file, not `home.vue` (which exists but isn't reachable via any nav link or redirect — dead code, low priority to clean up but don't assume `home.vue` is what renders at `/`).

### Key files

| File | What it does |
|------|-------------|
| `src/router/router.ts` | Routes + GA afterEach tracking |
| `src/views/home.vue` | Homepage: FeaturedItems (What's New) + Explore section + OurMentions + Feedback + Footer |
| `src/views/bingsu-page.vue` | `/bingsu` SEO page (= the homepage, see routes note above): hero (text + `HeroSlideshow`) + full bingsu grid + FeedMe CTA |
| `src/views/menu.vue` | Wrapper for `menu.vue` component |
| `src/views/about-page.vue` | Wraps `<AboutUs>` + `<Footer>` |
| `src/views/catering-page.vue` | Wraps `<Catering>` + `<Footer>` |
| `src/views/find-us-page.vue` | Wraps `<FindUs>` + `<Footer>` |
| `src/components/menu/menu.vue` | Interactive menu tabs (5 tabs, photo-grid cards) |
| `src/components/menu/menu-items.ts` | All menu data |
| `src/components/menu/menu-item-type.ts` | MenuItemType enum (5 values: Bingsu, Drinks, Topping, DubaiCookie, Croffle) |
| `src/components/nav-bar.vue` | Full nav bar with all page links + FeedMe order button + mobile hamburger |
| `src/components/find-us.vue` | Leaflet map + 6 outlet cards |
| `src/components/hero-slideshow.vue` | Auto-advancing crossfade slideshow (3.5s interval, dot indicators) — used in the `/bingsu` (homepage) hero, right-hand side |
| `src/components/featured-items.vue` | "What's New" placeholder (3 placeholder cards — needs real photos from Rainey) |
| `src/components/footer.vue` | Footer with Contact, Hours, Outlets sections |
| `index.html` | HTML shell, GA script (G-JK4NSKLNWE), meta tags |

---

## Favicon (`static/binq.png`, referenced in `index.html` as `<link rel="shortcut icon">`)
Same logo mark as the nav bar, but **must have a solid cream (`#fff5ea`) background, not transparent.** It was originally transparent-background — fine in a browser's light-theme tab bar, but on a dark-theme browser/OS the transparent PNG let the dark tab background show through, making the logo look like a broken/wrong "dark mode" version (Rainey flagged this from a screenshot). Fixed by padding the logo onto a square `#fff5ea` canvas, same treatment as the nav bar's circular cream backdrop (`src/components/nav-bar.vue`) — keeps the favicon looking like "the logo" regardless of the viewer's browser theme. If this file is ever regenerated from the raw logo mark again, don't skip the background fill.

---

## Nav Bar (`src/components/nav-bar.vue`)
Full horizontal nav replacing the old 2-icon minimal bar:
- **Left:** Binq logo (circular, links to `/`)
- **Centre (desktop):** Bingsu | Menu | About Us | Catering | Find Us
- **Right (desktop):** "Order Now →" button → FeedMe URL
- **Mobile:** hamburger with animated bars → slide-down drawer with all links + order button

### Logo asset (`src/assets/logo/binq.jpg`)
Despite the `.jpg` extension, the file is actually PNG-encoded with transparency (`file` reports "PNG image data ... RGBA") — keep saving it as PNG bytes into that same `.jpg` path if it's ever edited again; browsers decode by magic bytes, not extension, so this is safe and matches how it already was.
The logo mark itself is a wide landscape shape (originally 642×389). Used at `h-9 w-9 rounded-full object-cover` (and similarly elsewhere, e.g. map pins in `find-us.vue`) — a non-square source in a square/circular `object-cover` frame gets its wider dimension cropped, which was chopping off the left diagonal stroke and the right "Q" tail (looked "too zoomed in"). Fixed by padding the source to a square canvas (transparent bars top/bottom) rather than changing any CSS — `object-cover` on a truly square source needs no cropping at all. If a new logo file ever comes in, pad it to square the same way before dropping it in; don't try to fix this via `object-contain` (leaves the circle looking sparse/empty at small sizes).

---

## Menu Page (`src/components/menu/menu.vue`)

### Tabs
5 tabs: **Bingsu · Drinks · Topping · Dubai Chewy Cookie · Croffle**
- Iced Chocolate items merged into Drinks tab (no separate tab)
- Dubai Cookie shows 2 items only (Big + Mini)
- No cart/add-item logic — purely informational. Single "Order online via FeedMe →" button in the sticky tab header.

### Card layout (unified across all tabs)
All tabs use `grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 sm:max-w-[1100px] sm:mx-auto` and the same card structure. **Went through 3 iterations to land here (July 2026) — worth reading if this ever needs adjusting again:**
  1. First ask, "6 boxes in the same frame" — misread as "6 columns across" (`lg:grid-cols-4 xl:grid-cols-6`). Technically showed 6 per row, but wasn't what was wanted.
  2. Clarified: keep 3 per row, just shrink cards so 2 full rows (6 items) fit without scrolling → capped the grid container at `max-w-[720px]` (vs. the page's normal `xl:max-w-[1320px]`), 3 columns of ~220px each.
  3. That felt too small with too much unused side space → **final state**: 4 columns, container widened to `max-w-[1100px]` (cards ~255px each), giving 8 items visible per frame (2 rows × 4) — bigger and more eye-catching while still using the freed-up width instead of leaving it empty.

  **Takeaway: "N items visible" is ambiguous between row-width (column count) and card-size (container max-width) — the two produce very different layouts, and both dimensions (column count AND container width) may need tuning together to hit a specific "items per frame" target that also looks intentional, not cramped or sparse. Don't assume the first plausible reading is right; if unsure, the container-width lever is usually the safer one to reach for since it doesn't change how many items appear per row on mobile.**
- **Photo:** padded square frame — `p-3 pb-0` wrapper around an `aspect-square rounded-xl overflow-hidden` block, matching the 1200×1200 assets 1:1 so the full photo shows centered, no re-cropping (Rainey explicitly asked for this: square photo shown whole, inside a smaller inset frame). Toppings: `object-contain` + `mix-blend-mode: multiply` (white product shots blend into cream card). Everything else: `object-cover object-center` (only matters for the few non-square legacy assets).
- **Missing-photo fallback:** `@error` on the img marks the item in a `failedImages` set → card renders a cream block with a small faded Binq logo instead of a broken-image glyph. So a missing asset degrades gracefully — but check the Still Missing list below before assuming a photo exists.
- **Text:** name + price row, then description/recommended toppings below (small text, `line-clamp-2`) — toppings show name+price only
- `IMAGE_FOLDER` record maps `MenuItemType` → subfolder name
- **Bingsu tab shows no price per item.** Rainey asked for this specifically (`v-if="selectedType !== MenuItemType.Bingsu"` around the price `<p>`) — every other tab (Drinks, Topping, Dubai Cookie, Croffle) still shows `RM{{ price }}`. A right-aligned disclaimer — "Prices are not inclusive of SST." — renders below the grid, only when `selectedType === MenuItemType.Bingsu`.
  - ⚠️ **Flex-stretch gotcha:** the grid's wrapping `<section>` must be `flex flex-col`, not just `flex`. It was originally just `flex` (a single grid `<div>` child, fine at the time) — adding the disclaimer `<p>` as a second flex child under plain `flex` triggered default `align-items: stretch`, which stretched the `<p>` to the same height as the entire 13-card grid (rendered ~2200px tall, positioned as if starting at the top of the section, visually pushed off behind the sticky tab header — looked completely missing even though `getBoundingClientRect()` showed a non-zero box). If any other conditional sibling is ever added next to the grid `<div>` inside that section, keep `flex-col` or this bug recurs.

### Image assets — subject-focused square crops (June 2026)
All in `src/assets/images/menu/{bingsus,drinks,toppings,cookies,croffles}/`, jpg+webp pairs.
- Source: `Binq Menu/FeedMe Menu/` and `Binq Menu/Croffle & Dark Chocolate Drink/` (local, gitignored)
- The FeedMe studio portraits (bingsu, drinks) have the subject in the **lower two-thirds** with empty backdrop above — a naive center crop shows backdrop and cuts the tray. So assets are pre-cropped to **1200×1200 squares with a per-category vertical focus** (PIL, jpg q85 / webp q80): bingsu tray-scene portraits `focus_y 0.68`, drinks `0.57`, croffle-with-sauce `0.60`, croffle-no-sauce `0.62`. If new FeedMe-style photos arrive, crop the same way (square window centered on focus_y × height, clamped) — do NOT just resize the portrait and rely on `object-cover`.
- **Per-photo overrides (Rainey-reviewed, keep these):**
  - **9 of 13 bingsu photos now source from `Rhyser Photoshoot V2/` instead of `FeedMe Menu/Bingsu/`.** Rainey disliked the FeedMe hand+spoon action shots and asked for full bowl + full tray, no hand, matching White Peach Oolong / Mango Sago's look — confirmed by cross-checking each Rhyser photo's visible toppings against that flavor's `recommendedToppings` in `menu-items.ts`. All cropped to 1200×1200, focus_y ~0.60–0.64 (square window centered on focus_y × height of the *Rhyser* source, same method as before):
    | Flavor | Rhyser file |
    |---|---|
    | Roasted Soybean Oolong | BINQ-1.JPG |
    | White Peach Oolong | BINQ-9.JPG |
    | Mango Sago | BINQ-38.JPG |
    | Matcha | BINQ-32.JPG |
    | Hoji Cha Cha | BINQ-23.JPG |
    | Pistachio | BINQ-35.JPG |
    | Dark Chocolate | BINQ-15.JPG |
    | Thai Milk Tea | BINQ-51.JPG |
    | Kumquat Jasmine | BINQ-46.JPG |

    Both shoots share the same orange-to-beige gradient backdrop, so these 9 blend seamlessly — no more tone mismatch between cards.
  - Matcha Crème Brulee: originally zoomed INTO just the bowl per an earlier ask, but Rainey later reversed that — it now uses the same full-tray framing as the rest (recropped from `FeedMe Menu/Bingsu/Matcha Creme Brulee Bingsu.png`, square window = full image width, `focus_y 0.604`, all 4 topping bowls visible).
  - **Tiramisu & Soybean Longan — no wider source exists.** Both live only as small, already-cropped, non-square JPGs (`tiramisu.jpg` 705×528, `soybean-longan.jpg` 791×593) with no larger/original version anywhere in `Binq Menu/` — cropping tighter was not an option. Fixed by **padding to square** instead: canvas sized to the wider dimension, original image centered, top/bottom bands filled with the image's own sampled edge color (sky-color for top, table-color for bottom) and the two seams softened with a small Gaussian blur band. This avoids cropping any more content away — do NOT try to "zoom out" these two by finding a tighter crop; there's nothing more to crop, only pad. If Rainey ever shares a proper wide/full-scene shot of these two flavors, replace this padded version outright rather than re-padding.
  - Multiple shot styles exist across `FeedMe Menu/Bingsu/` and `Rhyser Photoshoot V2/` — wide tray scenes, close-up action shots, static full-scene, group shots (multiple bowls in one frame, e.g. `BINQ-62.JPG` — not directly usable per-item but useful for confirming topping/color identification) — so eyeball each new photo before assuming a default crop is right. `Rhyser Photoshoot V2/` has 30 files (`BINQ-#.JPG`, unlabeled by flavor) — identify by matching visible toppings to `menu-items.ts`, not by mound color alone (e.g. Hoji Cha Cha and Roasted Soybean Oolong are both tan/brown).
  - **Dark Chocolate Pistachio Kunafa** is still the one remaining bingsu photo without a full-tray version — FeedMe-only PNG, no tray shot exists in either folder, close-up by necessity not choice.
- **Croffle gotcha:** `FeedMe Menu/Croffle/Croffle  (6).png` is a two-panel promo POSTER (headline text + drink panel), not a product photo. It was once split into the croffle card slots and looked broken (sliced headline, off-topic drinks). The croffle cards use the real photos from `Croffle & Dark Chocolate Drink/` (`Croffle .png` = dipping shot, `2.png` = tray spread). Don't swap the poster back in.
- Toppings and Dubai Cookie assets are square already (white-bg product shots / square promo art) — untouched by the recrop, they render via `object-contain`.
- **Topping sizes normalized (July 2026).** All 25 toppings sit on identical 2000×2000 white canvases, but because the Topping tab uses `object-contain` (not `object-cover`), the DISPLAYED size of each bowl depends on what fraction of that canvas the subject actually fills — and that fraction varied a lot per photo (measured 48%–63% of canvas width across the set), so some bowls (mascarpone-cream, lotus-biscoff, taroballs) visibly looked bigger than others (red-bean, mango-sauce, butter-crisp) despite every card frame being the same size. Rainey caught this ("some photos are bigger than the rest"). Fixed by re-deriving every topping photo from itself: tight-crop to the subject's non-white bounding box (+1.5% padding), scale so the subject's larger dimension is exactly 56% of a fresh 2000×2000 white canvas, center it. All 25 are now within 0.1% of each other on this metric. **If new topping photos are added later, run them through the same normalize-to-fill-fraction process — don't just drop a raw product shot onto a white canvas at whatever size it came in, or this drifts again.**
- **Passionfruit Popping Boba topping — legacy asset, rebuilt from scratch.** Unlike the other 24 toppings, this one wasn't part of the FeedMe/Rhyser photoshoots (no source file exists for it anywhere in `Binq Menu/`) — it was a much older photo: a tiny bowl on a huge 7008×4672 canvas with a dull gray vignette background and a visible cast shadow. Fixed in stages (restore original via `git show 738647e:src/assets/images/menu/toppings/passionfruit-popping-boba.jpg` if it ever needs redoing):
  1. Crop/scale to bring the bowl to a reasonable size within a 2000×2000 frame (crop window: center `(3343,2555)`, half-extent `1306` on the original 7008×4672 source).
  2. **Find the bowl's TRUE bounding box first** (a moderate darkness threshold like `gray<150` isolates just the bowl+boba, excluding the softer shadow/vignette), before doing anything else. This step was skipped the first time and caused a real bug: the shadow-removal ellipse ended up smaller than the bowl itself and sliced off part of the bowl's bottom-left edge — Rainey caught it ("part of the bowl is hidden"). The lesson: measure the subject's bbox and verify the mask fully contains it (check all 4 *corners*, not just the edge midpoints — an ellipse that touches a rectangle's edge midpoints does NOT contain its corners; needs semi-axes ≈1.45× the bbox half-extents to guarantee full coverage) before applying any mask, and spot-check `fade_strength` at those corners is exactly 0 before saving.
  3. Shadow removed via an elliptical fade mask centered on the bowl+boba, sized per the corner-containment rule above (not a simple horizontal cutoff — the shadow's darkest point sits *beside*, not directly under, the bowl, and its darkness blends continuously into the bowl's own shaded underside with no hard edge, so pixel-perfect segmentation isn't achievable without real photo-matting).
  4. A second, gentler whitening pass (global ramp, `lo≈188, hi≈224`) on top of the ellipse output — the ellipse only fades the shadow *near* the bowl; the source photo's overall background has its own soft vignette gradient extending to the canvas edges that the ellipse alone doesn't reach. Skipping this left a faint halo that also threw off step 5's bounding-box detection (picked up the halo as part of the "subject").
  5. Same normalize-to-56%-fill step as the other 24 toppings (see above) — tight-crop to bbox (+1.5% pad), scale so larger dimension = 56% of a fresh 2000×2000 white canvas, center. Final fill 0.544, matching the other 24's 0.545.

**No missing photos as of July 2026.** Iced Chocolate, Hot Chocolate, Mocha Cloud, and Cheese Cloud all got new clean studio shots (orange-backdrop product photos from `FeedMe Menu/Beverage Pictures/`, July 2026 batch) — center-cropped square and resized to 1200×1200 jpg+webp like the rest. (Chamomile Tea, Pure Green Tea, and English Breakfast Tea were removed from `menu-items.ts` entirely — Rainey dropped them from the Drinks tab, so they're gone, not just photo-less.)

**Croffle tab is a single item now (July 2026).** Rainey asked to drop "Croffle With No Sauce" and keep one card titled just "Croffle" (RM14), using the new `FeedMe Menu/Croffle/Croffle with sauce.png` promo shot (bucket of croffles + cream cheese & tiramisu sauce bowls). The `croffle-no-sauce.jpg/webp` assets were deleted. **Dubai Chewy Cookie tab is also a single card now (July 2026).** Rainey removed the "Big Dubai Chewy Cookie" card and kept the Mini, renamed to just "Dubai Chewy Cookie" (still `mini-dubai-chewy-cookie` image) with the Big's description. The `big-dubai-chewy-cookie.jpg/webp` assets (the NEW cross-section shot) are still in `src/assets/images/menu/cookies/` but unused.

**Prices are hidden on the menu page (July 2026).** Rainey removed all RM prices from the menu cards (and the SST footnote). The `price`/`priceSmall` fields still exist in `menu-items.ts` and the `MenuItemBase` interface — they're just not rendered in `menu.vue` anymore, so they're easy to restore.

**Find Us per-outlet hours (July 2026).** `find-us.vue` outlets now support optional `hours: string[]` and `badge: string` fields; outlets without them fall back to `DEFAULT_HOURS` (Sun–Thu 1–11 PM, Fri–Sat 1–11:30 PM). Sunway Square has `hours: ["Mon – Sun: 10:00 AM – 10:00 PM"]` (mall hours) and a "Mall" pill badge next to its name. Note the footer still shows the generic hours block.

---

## Bingsu Page Hero / Homepage (`src/views/bingsu-page.vue`)

- **No bingsu photo grid on this page anymore — removed entirely (July 2026).** This page used to have its own duplicate 13-photo bingsu grid (separate markup from `menu.vue`'s, same `menu-items.ts` data — this was the source of an earlier "homepage bingsu photos still zoomed in" bug, since the two grids didn't share a component). Rainey then decided the full-photo repetition (hero slideshow photos + a 13-card photo grid, all bingsu, all one scroll after another) was too much and asked to cut it. Below the hero is now:
  1. `<NewOfferings />` — the Instagram feed (see Instagram Feed section below), directly under the hero.
  2. A lightweight **text-only** teaser: heading, one line, then all 13 flavour names as plain rounded-pill `<span>`s (`v-for="item in bingsuItems"`, no images, no prices), then "View Full Menu" + "Order on FeedMe" buttons. Deliberately has zero photos — the actual photo grid lives only on `/menu` now. If asked to bring photos back here, prefer a small number (3-4) over recreating the full 13-card grid, to avoid recreating the repetition problem.
- **Hero slideshow (`src/components/hero-slideshow.vue`):** added because the hero's right-hand side was empty at desktop widths. **Takes props, not hardcoded slides** — `slides: {imageName, alt}[]`, `startIndex?`, `intervalMs?` (default 4000). Each instance is a `aspect-[4/5]` card, auto-advancing with a 700ms crossfade + clickable dot indicators.
  - **Two instances side by side**, not one — `bingsu-page.vue`'s hero renders `SLIDESHOW_LEFT` and `SLIDESHOW_RIGHT` (3 slides each) in a `grid-cols-2` layout, with the right tile offset down (`mt-8`) for a staggered collage look, and different `start-index`/`interval-ms` per tile so they don't crossfade in sync. Hero text column shrunk to `lg:w-2/5` (from `3/5`) and the photo column grown to `lg:w-3/5` (from `2/5`) to give the photos real presence — Rainey's first version (one small `max-w-[340px]` tile) still looked mostly-empty and was replaced with this.
  - **Only full-scene shots — no macro/close-up crops.** The first version used two tight spoon-lift close-ups (hand+spoon filling most of the frame, food floating with no table/tray visible) and Rainey called them out as "too zoomed in" even after confirming the crop itself wasn't the problem — cross-checked against the *original* uncropped Rhyser source and the crop was preserving nearly the whole photo already; the close, context-free composition is just what those particular source photos are. **Don't try to "zoom out" a macro shot by adjusting the crop window — swap the source photo for a wide one instead.** The photos that read well here are the ones showing the full bowl + tray + surrounding table (same "full-scene" criterion used for the menu-grid bingsu photos elsewhere in this doc).
  - Assets: `src/assets/images/hero-slideshow/`, jpg+webp pairs, 1000×1250 (4:5), sourced from `Binq Menu/Rhyser Photoshoot V2/`:
    | File | Source | Style |
    |---|---|---|
    | `action-hoji-cream-pour` | BINQ-27.JPG | pour action, full bowl+tray visible |
    | `action-matcha-cream-pour` | BINQ-33.JPG | pour action, full bowl+tray visible |
    | `trio-group-shot` | BINQ-62.JPG | 3 bowls together, wide/full context |
    | `full-roasted-soybean` | BINQ-1.JPG | full-scene, same source as the bingsu-grid asset but cropped to 4:5 instead of square |
    | `full-thai-milk-tea` | BINQ-51.JPG | full-scene, ditto |
    | `full-kumquat-jasmine` | BINQ-46.JPG | full-scene, ditto |
  - **Removed** (were macro/close-up, replaced per the note above): `action-white-peach` (BINQ-13.JPG), `action-mango-scoop` (BINQ-42.JPG) — don't re-add these unless the ask changes back.
  - If more slides are wanted later, prefer more full-scene shots over action/macro ones. Untouched Rhyser candidates: `BINQ-4/18/25/37/47.JPG` — eyeball each before using; several are tight macro shots like the ones that got rejected here.

---

## Find Us (`src/components/find-us.vue`)

Uses **Leaflet.js + OpenStreetMap** (no API key needed, installed: `leaflet @types/leaflet`):
- Pinpoints all 6 outlets with custom Binq logo pins (circular logo image, orange label)
- Clicking a pin shows popup: outlet name, area, phone number, "Open in Google Maps →" link
- Below the map: 6 outlet cards (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, capped at 3 columns — do NOT add an `xl:grid-cols-6`, it was tried and made cards too narrow for longer names like "Damansara Uptown" to fit, text overflowed the card border. 3 columns × 2 rows is the right shape for 6 outlets) with hours + individual Google Maps links. Card heading also has `break-words` and the wrapping div has `min-w-0` (needed inside a flex/grid item for `break-words`/`truncate` to actually take effect — without it the item won't shrink below its content's intrinsic width) — keep both if touching this markup again.
- Map default view: `setView([3.113, 101.659], 11)` — centered/zoomed to fit all 6 pins (recomputed as the bounding-box center when Sunway Square was added; re-check this if another outlet is added later)

### Outlet data
| Outlet | Area | Coords | Maps link |
|--------|------|-----------------|-----------|
| Desa Sri Hartamas | Kuala Lumpur | 3.1619, 101.6571 | share.google/rTjNqgakWm7zmJuGe |
| SS15 | Subang Jaya | 3.0772, 101.5779 | share.google/ePjDMj9NlJb2gqDq1 |
| SS2 | Petaling Jaya | 3.1159, 101.6257 | share.google/QkxXFiHSPKRwaYhTu |
| Damansara Uptown | Petaling Jaya | 3.1488, 101.6162 | share.google/ml9FNXW9d7f2KjGOQ |
| Taman Segar | Cheras | 3.0749, 101.7397 | share.google/rOz3Vn5V7U1X9V51T |
| Sunway Square | Bandar Sunway | 3.0646, 101.6058 | share.google/OLsShuKEdEWos2JGd |

Sunway Square added July 2026 (Rainey's new location). Coordinates resolved via Nominatim/OpenStreetMap search for "Sunway Square Mall Bandar Sunway" (not Google Places — no API key available locally), phone number reused from the other outlets pending confirmation. Also added to the `address` array in the `Restaurant` JSON-LD block in `index.html`.

⚠️ **`share.google/...` short links can be ambiguous for chains with one Knowledge Graph entity across locations.** Rainey later sent a second, different-looking short link expecting it to be a 7th outlet — `curl -sL -D -` on it resolved to the exact same `kgmid=/g/11nqrtgrgd` and `q=Binq+Sunway+Square+Mall` as the original Sunway Square link, i.e. Google collapsed both to the same generic brand listing rather than a specific pin. Confirmed with Rainey it was the same place, not a new one. **If a new outlet link ever produces the same kgmid as an existing outlet, don't assume it's new — flag the collision and ask**, the same way this one was caught.

⚠️ **Phone numbers in popups currently all set to `03-5888 5453`** — Rainey needs to confirm whether each outlet (including the new Sunway Square one) has its own number or if this single number is correct for all.

⚠️ **Sunway Square has no Google review data yet.** The aggregate rating in `our-mentions.vue` / `google-reviews.json` is computed only across the original 5 `PLACE_IDS` (see Google Reviews section below) — it doesn't have a Place ID for Sunway Square. Once the Places API secrets are sorted, get Sunway Square's Place ID and append it to `PLACE_IDS` so the weighted rating includes all 6 outlets.

---

## Footer (`src/components/footer.vue`)
- Headings use `header-font` (Fraunces) — Contact / Opening Hours / Outlets
- Email: `binqdessert@gmail.com`
- No phone number in footer (moved to map popups)
- "Bingsu like no other." (was "Bingsus")
- Copyright: dynamic year + company reg 202301021089 (1515011-M)
- **Outlets list is a hand-maintained duplicate of `find-us.vue`'s `OUTLETS` array — not generated from it.** When Sunway Square was added to `find-us.vue` this list wasn't updated in the same pass and Rainey caught the miss ("all the way at the bottom right under outlets, you missed out Sunway Square"). Fixed, but **any future outlet add/remove must touch both files** — footer just has plain `<a>` tags per outlet (name + `share.google` link), no shared data source.

---

## Google Analytics
- GA ID: `G-JK4NSKLNWE`
- Base `gtag` script already in `index.html`
- Page view tracking fires in `router.afterEach` in `router.ts`

---

## Google Reviews (Automated)
- Weekly GitHub Actions fetch → `src/data/google-reviews.json` → `our-mentions.vue`
- Weighted aggregate across 5 outlets (~4.9★ / ~4,600+ reviews) — does NOT yet include Sunway Square (6th outlet, no Place ID collected yet, see Find Us section above)
- **GitHub Secrets needed** (Eric must add — requires Admin access): `GOOGLE_PLACES_API_KEY`, `PLACE_IDS`
- ⚠️ API key was shared in chat — regenerate in Google Cloud Console and update the secret

PLACE_IDS: `ChIJowwocABNzDER0rO2kXd7FCA,ChIJpQCLo_5JzDERZLjlJsg42U8,ChIJ13IMeK01zDERBUFT6UDVpGw,ChIJL_jESoJJzDERIhJtRVJHKvs,ChIJJWBzJfFJzDERq5l_pQO6vTs`

---

## Instagram Feed
Behold.so widget — feed ID `i4JCIdZM3CZgHNacmLAL`. Component: `src/components/new-offerings.vue` ("What's New at Binq" heading + `<behold-widget feed-id="...">`). Loader script (`https://w.behold.so/widget.js`) in `index.html` `<head>`.
- **Custom element registration:** `vite.config.ts` has `isCustomElement: (tag) => tag === "behold-widget"` in the Vue plugin's `template.compilerOptions` — needed so Vue's compiler doesn't warn/choke on the unrecognized `<behold-widget>` tag (Behold's script registers it as a native Web Component at runtime via `customElements.define`, outside Vue's knowledge). **Vite config changes need a dev server restart to take effect** — don't expect this to hot-reload.
- ⚠️ **This component went unused for a while.** During the site's page-architecture rewrite, `new-offerings.vue` never got wired into any of the new page components (`home.vue`, `bingsu-page.vue`, etc.) — it just sat in the tree, correctly built but orphaned. Rainey noticed the Instagram feed had disappeared from the site and asked where it went. Re-added to `bingsu-page.vue` (= the homepage, see routes note), directly below the hero section. **If the Instagram feed ever seems to "disappear" again, check whether `<NewOfferings />` is actually imported+rendered somewhere before assuming the Behold integration itself broke** — the widget/loader/feed-id have been fine the whole time; the bug was always a missing render call.
- ⚠️ **Widget grows to fill its container width, uncapped, and its responsive breakpoints key off that container's OWN width — not the viewport.** `<behold-widget>` accepts no layout attributes at all (only `feed-id`); columns/tile-size/post-count-per-breakpoint are configured on the Behold.so dashboard, which we don't have login credentials for. When the widget was first re-added its wrapper `<div>` had no `max-width`, so on a normal browser it looked okay-ish but on a wide/ultrawide monitor it stretched to 3000px+ and rendered each of the 6 posts as a giant, near-overlapping tile — Rainey caught this ("too big... overlapping... want to see all six boxes on the same page"). Fixed by wrapping `<behold-widget>` in `div.max-w-4xl.mx-auto` in `new-offerings.vue` — capping the widget's own container width forces Behold's internal responsive layout to pick a compact tile size, which is the only sizing lever available from our side. **Don't try to fix Behold sizing with CSS targeting the widget or its internals (`behold-widget { ... }`) — it doesn't expose a shadow root or children to style; the container `max-width` is the only thing that works.**

---

## Catering (`src/components/catering.vue`)
Package details from `Catering Package.JPG` (gitignored). 4 event photos in `src/assets/images/catering/`. CTA links to Rainey's Microsoft Form for enquiries.

---

## ⏳ Still To Do

- [ ] **Push `douala-preview` to GitHub and open PR** — needs GitHub credentials (Eric)
- [ ] **`src/views/home.vue` is dead code — not routed anywhere.** `router.ts` redirects `PATHS.HOME` (`/`) straight to `PATHS.BINGSU` (`/bingsu`), so `home.vue` (and the `<FeaturedItems />` "What's New" placeholder cards it renders) never actually loads for a visitor. Same class of bug as the `new-offerings.vue` orphan case earlier this session — a component exists, builds fine, looks legitimate in the file tree, but nothing routes to it. Either delete `home.vue`/`featured-items.vue` if truly unneeded, or find out if Rainey actually wants a real homepage distinct from `/bingsu` and wire it in. Don't spend effort polishing `featured-items.vue`'s placeholder cards without resolving this first — it may be a completely unreachable page.
- [ ] **Outlet phone numbers** — confirm whether `03-5888 5453` applies to all 6 outlets (including new Sunway Square) or each has a unique number. Update `OUTLETS` array in `find-us.vue`.
- [ ] ~~Missing menu photos~~ — DONE July 2026 (Iced Chocolate, Hot Chocolate, Mocha Cloud, Cheese Cloud all have new studio shots). Dark Chocolate Pistachio Kunafa is still a close-up (no full-tray source exists).
- [ ] **Sunway Square Google Place ID** — outlet is live on the site (map + card + all "N Outlets" copy updated to 6), but its reviews aren't in the aggregate rating yet. Get the Place ID and add it to `PLACE_IDS`.
- [ ] **Wider source photos for Tiramisu / Soybean Longan** — currently padded-to-square from small non-square crops (see Menu Page section above) since no larger/full-scene original exists. Replace with a proper full-tray shot if Rainey gets one taken.
- [ ] **Add GitHub Secrets** — `GOOGLE_PLACES_API_KEY` + `PLACE_IDS` (Eric, Admin access)
- [ ] **Regenerate Google API key** (shared in prior chat session)

---

## Contact
Email: binqdessert@gmail.com · Instagram: instagram.com/binqdessert · Facebook: facebook.com/profile.php?id=100095187967073
