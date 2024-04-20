<script setup lang="ts">
import { ref } from "vue";

interface FeedbackRequest {
  name: string;
  email: string;
  branch: string;
  scope: string;
  message: string;
}

const request = ref<FeedbackRequest>({
  name: "",
  email: "",
  branch: "",
  scope: "",
  message: "",
});
</script>

<template>
  <div
    class="py-72 bg-gradient-to-br from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq px-12 sm:px-28 md:px-40 xxl:px-64 text-creamwhitebq flex justify-between h-full"
  >
    <section class="flex flex-col justify-center items-center w-1/2">
      <h1
        class="text-5xl sm:text-7xl xl:text-8xl xxl:text-10xl header-font font-extrabold"
      >
        Express your thoughts
      </h1>
      <p
        class="body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl my-10 lg:my-2 xl:my-6 tracking-wide"
      >
        We are proud of our accomplishments and it is only the beginning! But,
        we cannot forget about our loyal customers - tell us about what you
        think; may it be about our bing su, location, service or any
        improvements you would like to see in Binq!
      </p>
    </section>
    <section
      class="w-[40%] body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide"
    >
      <div class="flex justify-between mb-10">
        <div class="flex flex-col w-[45%]">
          <label class="mb-3">Email</label>
          <input
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.email"
            placeholder="Your email"
            type="input"
          />
        </div>
        <div class="flex flex-col w-[45%]">
          <label class="mb-3">Location of dine-in</label>
          <input
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.branch"
            placeholder="Select relevant branch"
            type="input"
          />
        </div>
      </div>
      <div class="flex flex-col mb-10">
        <label class="mb-3">Topic of subject</label>
        <input
          class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
          v-model="request.scope"
          placeholder="The scope of your feedback"
          type="input"
        />
      </div>
      <div class="flex flex-col">
        <label class="mb-3">Message</label>
        <textarea
          class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq h-96"
          v-model="request.message"
          placeholder="Your feedback can be about new bingsus you are interested in, service that we could improve on or anything you would like Binq to do more of. Your opinion matters!"
          type="input"
        ></textarea>
      </div>
    </section>
  </div>
</template>
