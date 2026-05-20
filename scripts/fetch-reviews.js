// Fetches top Google reviews for all Binq outlets and saves to src/data/google-reviews.json.
// Run via GitHub Actions weekly — never from the browser (API key stays server-side only).
const https = require("https");
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_IDS = process.env.PLACE_IDS ? process.env.PLACE_IDS.split(",").map((s) => s.trim()) : [];

if (!API_KEY) { console.error("Missing GOOGLE_PLACES_API_KEY"); process.exit(1); }
if (!PLACE_IDS.length) { console.error("Missing PLACE_IDS"); process.exit(1); }

function fetchPlace(placeId) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "places.googleapis.com",
        path: `/v1/places/${placeId}`,
        method: "GET",
        headers: {
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "displayName,reviews,rating,userRatingCount",
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(new Error(`JSON parse failed for ${placeId}: ${e.message}`)); }
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function main() {
  const allReviews = [];

  for (const placeId of PLACE_IDS) {
    try {
      const place = await fetchPlace(placeId);
      const outlet = place.displayName?.text || placeId;

      if (!place.reviews?.length) {
        console.log(`No reviews returned for ${outlet}`);
        continue;
      }

      for (const r of place.reviews) {
        const text = r.text?.text?.trim();
        if (!text || r.rating < 4) continue;

        allReviews.push({
          author: r.authorAttribution?.displayName || "Anonymous",
          rating: r.rating,
          text,
          outlet,
          publishTime: r.publishTime || "",
          relativeTime: r.relativePublishTimeDescription || "",
          googleMapsUri: r.googleMapsUri || "",
        });
      }

      console.log(`Fetched ${place.reviews.length} reviews for ${outlet}`);
    } catch (err) {
      console.error(`Error fetching ${placeId}: ${err.message}`);
    }
  }

  // Best reviews first (rating desc, then most recent)
  allReviews.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.publishTime) - new Date(a.publishTime);
  });

  const output = {
    lastUpdated: new Date().toISOString(),
    reviews: allReviews.slice(0, 25),
  };

  const outPath = path.join(__dirname, "..", "src", "data", "google-reviews.json");
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Saved ${output.reviews.length} reviews → ${outPath}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
