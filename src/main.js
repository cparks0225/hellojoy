import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import appStore from "@/store";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.use(Vuetify);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

let store = new Vuex.Store(appStore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
