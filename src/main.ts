import { createApp } from "vue";
import { PiniaPlugin } from "@/stores";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PiniaPlugin);
app.use(router);

app.mount("#app");
