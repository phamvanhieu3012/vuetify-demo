import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      variant: "outlined",
    },
    VTextField: {
      variant: "solo",
    },
  },
  theme: {
    defaultTheme: "dark",
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
