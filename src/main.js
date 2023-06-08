import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faSnapchat,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faPhone,
  faEnvelope,
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faSnapchat,
  faWhatsapp
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
