<script setup lang="ts">
import reviewsData from "@/data/google-reviews.json";
import { getImageUrl } from "@/util/image";
import { computed, onMounted, ref } from "vue";

interface Review {
  author: string;
  rating: number;
  text: string;
  outlet: string;
  publishTime: string;
  relativeTime: string;
  googleMapsUri: string;
}

const reviews = reviewsData.reviews as Review[];

// Top 3 reviews with enough text for the featured section
const featuredReviews = computed(() =>
  reviews.filter((r) => r.text.length > 80).slice(0, 3)
);

// Short quote snippets for the scrolling section
const moments = computed(() =>
  reviews.map((r) => {
    const snippet = r.text.length > 90 ? r.text.slice(0, 87).trimEnd() + "…" : r.text;
    return snippet;
  })
);

const momentsParts = computed(() => {
  const m = moments.value;
  return [
    m.slice(0, 3),
    m.slice(3, 6),
    m.slice(6, 9),
    m.slice(9, 13),
    m.slice(13, 16),
    m.slice(16),
  ].filter((part) => part.length > 0);
});

const isReducedMotion = ref<boolean>(
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
);

function addAnimation() {
  const scrollers = document.querySelectorAll(".scroller");
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");
    const scrollerInner = scroller.querySelector(".scroller-inner");
    if (scrollerInner !== null) {
      Array.from(scrollerInner.children).forEach((item) => {
        const dup = item.cloneNode(true) as Element;
        dup.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(dup);
      });
    }
  });
}

onMounted(() => {
  if (!isReducedMotion.value) addAnimation();
});

function formatDate(publishTime: string) {
  if (!publishTime) return "";
  const d = new Date(publishTime);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
}
</script>

<template>
  <div
    class="bg-creamyellowbq w-full h-full py-24 lg:py-32 px-12 sm:px-14 md:px-20 text-darkorangebq"
  >
    <section class="flex flex-col lg:flex-row lg:justify-between">
      <div class="w-full lg:w-[30%]">
        <h1
          class="text-4xl sm:text-6xl xl:text-7xl xxl:text-8xl header-font font-extrabold pb-3"
        >
          Binq buzzing
        </h1>
        <h2 class="text-xl xl:text-2xl xxl:text-4xl body-font mb-10">
          With an average of
          <span class="underline inline">4.7 / 5.0 stars over 100+ reviews</span>
          , we are proud to highlight some here
        </h2>
      </div>
      <picture class="ml-0 p-0 lg:ml-40 w-full h-full lg:w-[50%]">
        <source
          :srcset="getImageUrl('bingsu-our-mentions', 'our-mentions', undefined, true)"
          type="image/webp"
        />
        <source
          :srcset="getImageUrl('bingsu-our-mentions', 'our-mentions', undefined)"
          type="image/jpg"
        />
        <img
          :src="getImageUrl('bingsu-our-mentions', 'our-mentions')"
          alt="A blurred background containing the owners of Binq and a tray of Bingsu on the main counter in the store"
        />
      </picture>
    </section>

    <section
      class="flex flex-col md:flex-row md:justify-between pt-16 pb-20 font-medium"
    >
      <div
        v-for="review in featuredReviews"
        :key="review.author"
        class="md:w-2/5 xl:w-1/4 mt-10 md:mt-0 first:mt-0"
      >
        <h2 class="text-xl xl:text-2xl xxl:text-4xl body-font mb-4">
          "{{ review.text.slice(0, 60).trimEnd() }}…"
        </h2>
        <p class="text-lg xxl:text-xl body-font tracking-wide overflow-hidden line-clamp-6">
          {{ review.text }}
        </p>
        <div
          class="flex flex-row justify-between text-xl xxl:text-2xl body-font tracking-wide mt-5"
        >
          <a
            v-if="review.googleMapsUri"
            class="p-2 rounded-lg text-creamwhitebq bg-darkorangebq"
            :href="review.googleMapsUri"
            target="_blank"
            rel="noreferrer"
          >Full Review</a>
          <p>{{ review.author }} · {{ review.relativeTime || formatDate(review.publishTime) }}</p>
        </div>
      </div>
    </section>

    <section class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <h1
          class="text-4xl sm:text-6xl xl:text-7xl xxl:text-8xl header-font font-extrabold"
        >
          Buzzworthy moments
        </h1>
      </div>
      <div
        class="mt-8 lg:mt-0 lg:max-w-[50%] text-sm sm:text-base lg:text-lg xxl:text-xl body-font tracking-wide"
      >
        <div class="scroller" v-if="isReducedMotion">
          <ul class="scroller-inner">
            <li
              class="text-creamwhitebq bg-darkorangebq p-1 rounded-lg shadow-xl"
              v-for="moment in moments"
              :key="moment"
            >
              {{ moment }}
            </li>
          </ul>
        </div>
        <div v-else v-for="(part, i) in momentsParts" :key="i" class="scroller">
          <ul class="scroller-inner">
            <li
              class="text-creamwhitebq bg-darkorangebq p-1 rounded-lg shadow-xl"
              v-for="moment in part"
              :key="moment"
            >
              {{ moment }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scroller-inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);

  .scroller-inner {
    width: max-content;
    flex-wrap: nowrap;
    padding-block: 0.75rem;
    animation: scroll 40s linear infinite;

    li {
      white-space: nowrap;
    }
  }
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
