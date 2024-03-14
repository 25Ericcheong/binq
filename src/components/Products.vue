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
    class="my-72 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq py-40"
  >
    <section class="flex mx-64">
      <div class="text-creamwhitebq">
        <h1
          class="text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Discover Binq
        </h1>
        <h2
          class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10 text-creamwhitebq"
        >
          With an assortment of flavors available, the combination is limitless
        </h2>
      </div>
    </section>
    <section class="flex pt-40 mx-64">
      <div class="flex text-creamwhitebq">
        <div class="mr-64">
          <h2
            class="text-2xl lg:text-2xl xl:text-3xl xxl:text-5xl body-font mb-10"
          >
            For all to have the best experience, we take preparation and taste
            to the next level;
          </h2>
          <p
            class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl mb-48"
          >
            At Binq, we not only put countless of hours into researching the
            best combination of flavors out there but we want to ensure each and
            every single order is made to perfection for all to enjoy.
          </p>
          <div class="flex justify-between">
            <img
              class="h-1/4 w-2/5 rounded-lg"
              :src="getImageUrl('prep-bingsu-product-intro', 'intro')"
            />
            <img
              class="h-1/4 w-1/2 self-center rounded-lg"
              :src="getImageUrl('more-prep-bing-product-intro', 'intro')"
            />
          </div>
          <img
            class="my-40 rounded-lg"
            :src="getImageUrl('topping-product-intro', 'intro')"
          />
          <div class="flex justify-between">
            <img
              class="rounded-full"
              :src="getImageUrl('lychee-topping-product-intro', 'intro')"
            />
          </div>
        </div>
        <img
          :src="getImageUrl('bingsus-product-intro', 'intro')"
          class="h-1/3 rounded-full sticky top-0"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
