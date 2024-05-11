import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import "./input.css";
import { router } from "./router/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
