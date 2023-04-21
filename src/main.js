import "./style.css";
import { createApp } from "vue";
import { store } from "./services/store";
import router from "./router";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, md } from "vuetify/iconsets/md";

import { checkUserIsLoggedIn } from "./services/auth";

checkUserIsLoggedIn();

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
    },
  },
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");
