<script setup lang="ts">
import { ref } from "vue";

const BRANCHES = ["Desa Sri Hartamas", "Subang Jaya"];
const SCOPES = ["Food", "Service"];

interface FeedbackRequest {
  name: string;
  branch: string;
  scope: string;
  message: string;
}

const request = ref<FeedbackRequest>({
  name: "",
  branch: "",
  scope: "",
  message: "",
});
const hasError = ref<boolean>(false);

function trySubmit(event: Event) {
  if (event) {
    event.preventDefault();
  }

  const req = request.value;

  if (
    req.name === "" ||
    req.branch === "" ||
    req.scope === "" ||
    req.message === ""
  ) {
    hasError.value = true;
    return;
  }

  hasError.value = false;
}
</script>

<template>
  <div
    class="py-72 bg-gradient-to-tl from-darkorangebq from-5% via-orangebq via-50% to-dullorangebq px-12 sm:px-14 md:px-20 text-creamwhitebq flex flex-col lg:flex-row justify-between h-full"
  >
    <section
      class="flex flex-col justify-center items-center w-full lg:w-[40%]"
    >
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
    <form
      class="w-full lg:w-[50%] body-font text-xl sm:text-2xl lg:text-sm xl:text-xl xxl:text-2xl tracking-wide pt-20 lg:pt-0"
    >
      <div class="flex flex-col lg:flex-row justify-between mb-10">
        <div class="flex flex-col w-full lg:w-[45%] mb-10 lg:mb-0">
          <label class="mb-3">Name</label>
          <input
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.name"
            placeholder="Your name"
            type="text"
            name="name"
          />
        </div>
        <div class="flex flex-col w-full lg:w-[45%]">
          <label class="mb-3">Location of dine-in</label>
          <select
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.branch"
            placeholder="Select relevant branch"
            type="search"
            name="branch"
          >
            <option value="" disabled selected hidden>Select branch</option>
            <option v-for="branch in BRANCHES" :value="branch">
              {{ branch }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-col mb-10">
        <label class="mb-3">Topic of subject</label>
        <input
          class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
          v-model="request.scope"
          placeholder="May it be about food, ideas, etc"
          type="search"
          list="scope-data-list"
          name="subject-of-feedback"
        />
        <datalist id="scope-data-list">
          <option v-for="scope in SCOPES" :value="scope">{{ scope }}</option>
        </datalist>
      </div>
      <div class="flex flex-col">
        <label class="mb-3">Message</label>
        <textarea
          class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq h-96"
          v-model="request.message"
          placeholder="Your feedback can be about new bingsus you are interested in, service that we could improve on or anything you would like Binq to do more of. Your opinion matters!"
          type="text"
          name="message"
        ></textarea>
      </div>
      <div class="pt-10">
        <p v-if="hasError" class="pb-5">
          Ensure name, location of dine-in, subject and message inputs are
          filled
        </p>
        <button
          @click="(e) => trySubmit(e)"
          class="w-full border-solid border-2 p-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
