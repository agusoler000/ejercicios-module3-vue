import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import CE1 from "./pages/1-components/Ejercici1.vue";
import CE3 from "./pages/2-props/Ejercici3.vue";
import CE5 from "./pages/3-slots/Ejercici5.vue";
import RE7 from "./pages/4-dinamic-routes/Ejercici7.vue";
import PE9 from "./pages/5-pinia/Ejercici9.vue";
import PE11 from "./pages/6-api/Ejercici11.vue";

import FriendContactView from "./pages/4-dinamic-routes/components/FriendContactView.vue";
import PinioFriendContactView from "./pages/5-pinia/components/FriendContactView.vue";

const baseRoutes = [
  { path: "/ejercici1", component: CE1 },
  { path: "/ejercici3", component: CE3 },
  { path: "/ejercici5", component: CE5 },
  { path: "/ejercici7", component: RE7 },
  { path: "/ejercici9", component: PE9 },
  { path: "/ejercici11", component: PE11 }
];

const yourRoutes = [
  { path: "/ejercici7/contacts/:name", component: FriendContactView },
  { path: "/ejercici9/contacts/:name", component: PinioFriendContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes.concat(yourRoutes)
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
