<script setup lang="ts">
function getImageUrl(imageName: string, productDir: string) {
  return new URL(
    `/src/assets/images/products/${productDir}/${imageName}.jpg`,
    import.meta.url
  ).href;
}
</script>

<template>
  <div
    class="my-72 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq py-40 px-40 xxl:px-64"
  >
    <section class="flex">
      <div class="text-creamwhitebq">
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Discover Binq
        </h1>
        <h2
          class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-creamwhitebq"
        >
          With an assortment of flavors available, the combination is limitless
        </h2>
      </div>
    </section>
    <section class="flex pt-16 xl:pt-28 xxl:pt-40">
      <div class="flex text-creamwhitebq">
        <div class="flex flex-col mr-20 xl:mr-40 xxl:mr-64">
          <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
            For all to have the best experience, we take preparation and taste
            to the next level;
          </h2>
          <p class="body-font text-xl xxl:text-2xl mb-20 xxl:mb-48">
            At Binq, we not only put countless of hours into researching the
            best combination of flavors out there but we want to ensure each and
            every single order is made to perfection for all to enjoy.
          </p>
          <img
            class="h-1/4"
            :src="getImageUrl('more-prep-bing-product-intro', 'intro')"
          />
          <img
            class="my-20 xxl:my-40"
            :src="getImageUrl('topping-product-intro', 'intro')"
          />
          <img
            class="rounded-full w-4/5 h-1/4 self-center"
            :src="getImageUrl('lychee-topping-product-intro', 'intro')"
          />
        </div>
        <img
          :src="getImageUrl('bingsus-product-intro', 'intro')"
          class="h-1/3 rounded-full sticky top-0"
        />
      </div>
    </section>
    <section class="flex mt-80 justify-between">
      <div class="flex flex-col w-2/5">
        <div
          class="bg-creamyellowbq p-10 rounded-lg text-darkorangebq flex-col"
        >
          <h1
            class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
          >
            Don't forget
          </h1>
          <h2 class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font">
            We have 6 kinds of bingsus, over 10 toppings and 6 bingsu-topping
            pairings available.
          </h2>
        </div>
        <img
          class="w-3/4 rounded-full p-16 self-center"
          :src="getImageUrl('watermelon-topping-product', 'detail')"
        />
        <img
          class="w-fit rounded-full mt-10 self-center"
          :src="getImageUrl('topping-product', 'detail')"
        />
      </div>
      <img
        class="w-1/2 rounded-full"
        :src="getImageUrl('bingsu-set-product', 'detail')"
      />
    </section>
  </div>
</template>

<style scoped></style>
