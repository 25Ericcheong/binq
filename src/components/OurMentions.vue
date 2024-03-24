<script setup lang="ts">
import { getImageUrl } from "@/util/Image.js";
</script>

<template>
  <div
    class="bg-creamyellowbq w-full py-32 lg:py-72 px-12 sm:px-14 md:px-20 text-darkorangebq"
  >
    <section class="flex">
      <div class="w-1/4">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold pb-3"
        >
          Binq buzzing
        </h1>
        <h2 class="text-2xl xl:text-3xl xxl:text-5xl body-font mb-10">
          With an average of
          <h2 class="underline inline">4.7 / 5.0 stars over 100 reviews</h2>
          , we'd like to showcase some of them here.
        </h2>
      </div>
      <img
        class="w-3/4 pl-20"
        :src="getImageUrl('bingsu-our-mentions', 'our-mentions')"
      />
    </section>
    <section class="flex justify-between py-20 font-medium">
      <div class="flex flex-col w-1/4 flex-shrink-0">
        <div
          class="flex flex-row justify-between text-xl xl:text-2xl xxl:text-2xl body-font mb-5"
        >
          <h2>"11/10 Can confidently recommend this to anyone"</h2>
        </div>
        <p
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide h-1/3 overflow-hidden"
        >
          Especially to all the bingsu lovers out there. They&apos;ve got
          several choices of flavour which none are too sweet so it&apos;s also
          a perfect place for the older audience as well. Service wise, super
          friendly staff especially the young couple which are actually the
          owners of the place! Very attentive and are also super helpful to give
          suggestions if you&apos;re not sure what to try. Bingsu wise: Hoji Cha
          10/10 - As a hojicha lover this hit the spot perfectly, with the
          alternative oatmilk option it was super rich in flavour but also
          balanced so it wasn&apos;t too much. Roasted Soybean 10/10 - Slightly
          a bit on the sweeter side but balanced out perfectly with the cream
          cheese. Matcha 9/10 - Full of matcha flavour on every taste, would
          definitely satisfy the matcha lovers. Generally a great spot to visit
          with friends and family for dessert after a meal. Have heard nothing
          but complements when bringing people to try for the first time (and
          like me becoming regulars after)
        </p>
        <div
          class="flex flex-row justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide mt-5"
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
      <div class="flex flex-col w-1/4">
        <div class="text-xl xl:text-2xl xxl:text-2xl body-font mb-5">
          <h2>
            "Perfect hangout place with friends & family with good dessert!"
          </h2>
        </div>
        <p
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide h-1/3 overflow-hidden"
        >
          Love their hojicha bingsu!!! By far the richest taste I&apos;ve tried!
          And every time I come here this is a confirmed repeat order. (This is
          my 4th time here already) I also like their - oolong peach (imagine a
          chagee but shaved ice version) - soybean (you will love it if u like
          injeolmi) - matcha Each bingsu comes with 3-4 toppings. U can also
          modify ur toppings. But I think the combination is already good so I
          never modify. Environment is chill and cozy, also provide drinking
          water. Overall a perfect hangout place with ur friends and family with
          good dessert!
        </p>
        <div
          class="flex flex-row justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide mt-5"
        >
          <a
            class="p-2 rounded-lg text-creamwhitebq bg-darkorangebq"
            href="https://maps.app.goo.gl/c8iAMvf23wuFSoBN6"
            target="_blank"
            rel="noreferrer"
            >More</a
          >
          <p>Kathryn Chong - 18/01/2024</p>
        </div>
      </div>
      <div class="flex flex-col w-1/4">
        <div class="text-xl xl:text-2xl xxl:text-2xl body-font mb-5">
          <h2>"Flavors were different than other bingsu places"</h2>
        </div>
        <p
          class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide h-1/3 overflow-hidden"
        >
          Tried Binq for the first time and had a pleasant experience. Flavors
          were different than other bingsu places, worth trying because so far
          no other places has these flavours, it&apos;s always the same old
          thing (always green tea..oreo or yogurt) so this is something
          refreshing. Appreciate the fact that we can change toppings if we
          like. Space was quite clean, if there&apos;s any space to improve..the
          tables were a little sticky. I noticed the guy owner cleaning up
          constantly, looking around and keeping the place neat - which is
          really rare, impressive and much appreciated. Usually bingsu places
          (and even many cafes in general) are kinda dirty and messy, the staff
          don&apos;t really pay attention to customer service and leave it all
          to their customers to do everything but the guy owner here was very
          detailed and helped removed our bowls and trays once we were done so
          my friends and I could chat more comfortably. Really, really
          appreciate that and hope that he keeps up the good work. It&apos;s
          quite rare to have someone be proactive and pay attention to details
          like that. Nice place to chill and portions were good too, would come
          back again.
        </p>
        <div
          class="flex flex-row justify-between body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide mt-5"
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
    <section class="flex">
      <div class="w-1/2">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold"
        >
          Buzzworthy Binq moments
        </h1>
      </div>
      <div class="w-1/2 scroller">
        <ul>
          <li>
            Several choices of flavour which are not too sweet - making them
            perfect
          </li>
          <li>
            Hoji Cha 10/10 - As a hijocha lover; this hit the spot perfectly
          </li>
          <li>
            My 4th time being here and I love their oolong peach, soybean and
            matcha
          </li>
          <li>Roasted Soybean 10/10 - Slightly sweeter but balanced</li>
          <li>
            My first time trying Binq and flavors were unique and different;
            making them refreshing!
          </li>
          <li>Matcha 9/10 - Full of matcha flavour in every bite</li>
          <li>Roasted soybean oolong paired really well with cream cheese</li>
          <li>
            Perhaps one of the best bingsu in town in terms of that fine
            snowflake like texture
          </li>
          <li>
            Shaved ice was light and soybean mochi cube was springy and nicely
            paired with lots of brown sugar jelly
          </li>
          <li>One of the most delicious bingsu I’ve tried</li>
          <li>Their soya bean coated mochi cubes were absolutely delish!</li>
          <li>Roasted soybean oolong 4.75 out of 5 on flavour alone!</li>
          <li>My favourite will be their signature oolong and soya</li>
          <li>
            Tried their roasted soybean oolong and so satisfied with it. It has
            perfect fragrant, taste, and texture
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
