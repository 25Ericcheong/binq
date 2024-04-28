<script setup lang="ts">
import { computed, ref } from "vue";

const BRANCHES = ["Desa Sri Hartamas", "Subang Jaya"];
const SCOPES = ["Food", "Service"];
const TIMEZONE = "Asia/Kuala_Lumpur";
const LOCALES = "en-GB";

interface Feedback {
  email: string;
  branch: string;
  scope: string;
  message: string;
  submissionTime: string;
}

// this is structured based on provided instructions' request data structure: https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/form-submission-handler.js#L94
interface FormRequestData extends Feedback {
  formDataNameOrder: string;
  formGoogleSheetName: string;
  formGoogleSendEmail: string;
}

interface Request {
  data: FormRequestData;
  honeypot?: string;
}

const request = ref<Feedback>({
  email: "",
  branch: "",
  scope: "",
  message: "",
  submissionTime: new Date().toLocaleString(LOCALES, {
    timeZone: TIMEZONE,
  }),
});
const hasSubmitted = ref<boolean>(false);

const hasError = computed(() => {
  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const req = request.value;

  if (
    req.email === "" ||
    req.branch === "" ||
    req.scope === "" ||
    req.message === ""
  ) {
    return true;
  }

  if (!validateEmail(req.email)) {
    return true;
  }

  return false;
});

function createRequest(): Request {
  const data: FormRequestData = {
    formDataNameOrder: JSON.stringify([
      "submissionTime",
      "email",
      "branch",
      "scope",
      "message",
    ]),
    formGoogleSheetName: "responses",
    formGoogleSendEmail: "ericcheongkaikit@gmail.com",
    ...request.value,
  };
  return { data: data };
}

function trySubmit(event: Event) {
  event.preventDefault();

  const request = createRequest();

  // spam bot; do not send email
  if (request.honeypot !== undefined) {
    return;
  }

  const URL =
    "https://script.google.com/macros/s/AKfycbxDmKwpYWbm_zI0gRREp1QQS01r7ervHBVJo0DT5lA9rT7jpxPJbNyT6UgH-4SbB_TPCA/exec";
  const xhr = new XMLHttpRequest();
  const data = request.data;

  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  type formRequestDataKeys = keyof typeof data;
  const encoded = Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(data[key as formRequestDataKeys])
    )
    .join("&");

  xhr.send(encoded);

  hasSubmitted.value = true;
}
</script>

<template>
  <div
    class="py-72 bg-orangebq px-12 sm:px-14 md:px-20 text-creamwhitebq flex flex-col lg:flex-row justify-between h-full"
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
          <label class="mb-3">Email</label>
          <input
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.email"
            placeholder="Your email"
            type="text"
            name="email"
          />
        </div>
        <div class="flex flex-col w-full lg:w-[45%]">
          <label class="mb-3">Location of dine-in</label>
          <select
            class="bg-orangebq border-solid border-2 border-creamwhitebq p-2 placeholder:text-creamwhitebq"
            v-model="request.branch"
            placeholder="Select relevant branch"
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
          Ensure email (correct format), location of dine-in, subject and
          message inputs are filled
        </p>
        <p v-if="hasSubmitted" class="pb-5">
          Thank you for taking the time to submit your feedback! We appreciate
          it!
        </p>
        <button
          @click="(e: Event) => trySubmit(e)"
          :disabled="hasSubmitted || hasError"
          :style="hasSubmitted || hasError ? { opacity: 0.5 } : { opacity: 1 }"
          class="w-full border-solid border-2 p-2"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
