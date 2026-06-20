// Fetches top Google reviews for all Binq outlets and saves to src/data/google-reviews.json.
// Run via GitHub Actions weekly — never from the browser (API key stays server-side only).
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  let weightedRatingSum = 0;
  let totalRatingCount = 0;

  for (const placeId of PLACE_IDS) {
    try {
      const place = await fetchPlace(placeId);
      const outlet = place.displayName?.text || placeId;

      if (place.error) {
        console.error(`API error for ${placeId}: ${JSON.stringify(place.error)}`);
        continue;
      }

      if (typeof place.rating === "number" && typeof place.userRatingCount === "number") {
        weightedRatingSum += place.rating * place.userRatingCount;
        totalRatingCount += place.userRatingCount;
      }

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

  const outPath = path.join(__dirname, "..", "src", "data", "google-reviews.json");

  if (allReviews.length === 0) {
    console.error("No reviews fetched from any outlet — keeping existing file untouched.");
    process.exit(1);
  }

  // Best reviews first (rating desc, then most recent)
  allReviews.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return new Date(b.publishTime) - new Date(a.publishTime);
  });

  const output = {
    lastUpdated: new Date().toISOString(),
    aggregateRating: totalRatingCount > 0 ? Math.round((weightedRatingSum / totalRatingCount) * 10) / 10 : null,
    aggregateRatingCount: totalRatingCount,
    reviews: allReviews.slice(0, 25),
  };

  fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`Saved ${output.reviews.length} reviews → ${outPath}`);
  console.log(`Aggregate: ${output.aggregateRating} stars over ${output.aggregateRatingCount} reviews`);
}

main().catch((err) => { console.error(err); process.exit(1); });
