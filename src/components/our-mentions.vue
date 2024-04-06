<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getImageUrl } from "../util/Image";

const moments = ref<string[]>([
  "A variety of flavour that aren't too sweet - making them perfect",
  "Hoji Cha 10/10 - As a hijocha lover, this hits the spot perfectly",
  "My 4th time here and I still love their oolong peach, soybean and matcha",
  "Roasted Soybean 10/10 - Sweet but balanced",
  "First time trying Binq and flavors were unique and different; making them refreshing!",
  "Matcha 9/10 - Full of matcha flavour in every bite",
  "Roasted soybean oolong paired really well with cream cheese",
  "Soybean mochi cube was springy and nicely paired with sugar jelly",
  "Their soya bean coated mochi cubes were absolutely delish!",
  "Roasted soybean oolong 4.75/5 on flavour alone!",
  "One of the most delicious bingsu I&apos;ve tried",
  "Perhaps one of the best bingsu in town",
  "My favourite will be their signature oolong and soya",
  "Roasted soybean oolong has perfect fragrant, taste, and texture",
  "Can confidently recommend this to all the bingsu lovers",
  "As a korean, it is similar to Korean red bean shaved ice - tastes just like home",
  "Flavors are unique from other bingsu places",
  "Their bingsu is very unique and not too sweet",
  "Hojicha is by far the richest bingsu I have ever tried!",
  "Their soya bean coated mochi cubes were absolutely delish",
]);

// only used for/when animation is in effect
const momentsParts = ref<string[][]>([
  moments.value.slice(0, 3),
  moments.value.slice(3, 6),
  moments.value.slice(6, 9),
  moments.value.slice(9, 13),
  moments.value.slice(13, 16),
  moments.value.slice(16),
]);

const isReducedMotion = ref<boolean>(
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
);

function addAnimation() {
  const scrollers = document.querySelectorAll(".scroller");

  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller-inner");

    if (scrollerInner !== null) {
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        // so animated translation has no odd gap in repeating translation animation
        const duplicatedItem = item.cloneNode(true) as Element;

        // ensure this doesn't show up for screen readers
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}

onMounted(() => {
  if (!isReducedMotion.value) {
    addAnimation();
  }
});
</script>

<template>
  <div
    class="bg-creamyellowbq w-full py-52 lg:py-72 px-12 sm:px-14 md:px-20 text-darkorangebq"
  >
    <section class="flex flex-col lg:flex-row lg:justify-between">
      <div class="lg:w-1/5">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Binq buzzing
        </h1>
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
          With an average of
          <h2 class="underline inline">4.7 / 5.0 stars over 100+ reviews</h2>
          , we are proud to highlight some here
        </h2>
      </div>
      <img
        class="lg:w-3/4 p-0 lg:pl-40"
        :src="getImageUrl('bingsu-our-mentions', 'our-mentions')"
      />
    </section>
    <section class="flex justify-between pt-40 pb-56 font-medium">
      <div class="w-2/5 xl:w-1/4">
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-5">
          "11/10 Can confidently recommend this to anyone"
        </h2>
        <p class="text-xl xxl:text-2xl body-font tracking-wide overflow-hidden">
          Especially to all the bingsu lovers out there. They&apos;ve got
          several choices of flavour which none are too sweet so it&apos;s also
          a perfect place for the older audience as well. Service wise, super
          friendly staff especially the young couple which are actually the
          owners of the place! Very attentive and are also super helpful to give
          suggestions if you&apos;re not sure what to try. Bingsu wise: Hoji Cha
          10/10 - As a hojicha lover this hit the spot perfectly, with the
          alternative oatmilk option it was super rich in flavour but also
          balanced ...
        </p>
        <div
          class="flex flex-row justify-between text-xl xxl:text-2xl body-font tracking-wide mt-5"
        >
          <a
            class="p-2 rounded-lg text-creamwhitebq bg-darkorangebq"
            href="https://maps.app.goo.gl/GbsjxS6GdFXhUJso8"
            target="_blank"
            rel="noreferrer"
            >More</a
          >
          <p>J K - 12/03/2024</p>
        </div>
      </div>
      <div class="hidden xl:block w-1/4">
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-5">
          "Perfect hangout place with good dessert!"
        </h2>
        <p class="text-xl xxl:text-2xl body-font tracking-wide overflow-hidden">
          Love their hojicha bingsu!!! By far the richest taste I&apos;ve tried!
          And every time I come here this is a confirmed repeat order. (This is
          my 4th time here already) I also like their - oolong peach (imagine a
          chagee but shaved ice version) - soybean (you will love it if u like
          injeolmi) - matcha Each bingsu comes with 3-4 toppings. U can also
          modify ur toppings. But I think the combination is already good so I
          never modify. Environment is chill and cozy, also provide drinking
          water. Overall a perfect hangout place ...
        </p>
        <div
          class="flex flex-row justify-between text-xl xxl:text-2xl body-font tracking-wide mt-5"
        >
          <a
            class="p-2 rounded-lg text-creamwhitebq bg-darkorangebq"
            href="https://maps.app.goo.gl/c8iAMvf23wuFSoBN6"
            target="_blank"
            rel="noreferrer"
            >More</a
          >
          <p>Kathryn - 18/01/2024</p>
        </div>
      </div>
      <div class="w-2/5 xl:w-1/4">
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-5">
          "Flavors were different than other bingsu places"
        </h2>
        <p class="text-xl xxl:text-2xl body-font tracking-wide overflow-hidden">
          Tried Binq for the first time and had a pleasant experience. Flavors
          were different than other bingsu places, worth trying because so far
          no other places has these flavours, it&apos;s always the same old
          thing (always green tea..oreo or yogurt) so this is something
          refreshing. Appreciate the fact that we can change toppings if we
          like. Space was quite clean, if there&apos;s any space to improve..the
          tables were a little sticky. I noticed the guy owner cleaning up
          constantly, looking around and keeping the place ...
        </p>
        <div
          class="flex flex-row justify-between text-xl xxl:text-2xl body-font tracking-wide mt-5"
        >
          <a
            class="p-2 rounded-lg text-creamwhitebq bg-darkorangebq"
            href="https://maps.app.goo.gl/RCc2zopeopnzvsfq9"
            target="_blank"
            rel="noreferrer"
            >More</a
          >
          <p>Lizzie - 18/01/2024</p>
        </div>
      </div>
    </section>
    <section class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold"
        >
          Buzzworthy moments
        </h1>
      </div>
      <div class="lg:max-w-[50%] text-xl xxl:text-2xl body-font tracking-wide">
        <div class="scroller" v-if="isReducedMotion">
          <ul class="scroller-inner">
            <li
              class="text-creamwhitebq bg-darkorangebq p-1 rounded-lg shadow-xl"
              v-for="moment in moments"
            >
              {{ moment }}
            </li>
          </ul>
        </div>
        <div v-else v-for="momentPart in momentsParts" class="scroller">
          <ul class="scroller-inner">
            <li
              class="text-creamwhitebq bg-darkorangebq p-1 rounded-lg shadow-xl"
              v-for="moment in momentPart"
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

  /* fadding effect on each tag */
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

/* will be in effect when reduced motion is not selected by user */
@keyframes scroll {
  to {
    /* -0.5rem came from the 1rem gap for each tag where 0.5rem is used per side of tag */
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
