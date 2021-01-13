import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import router from "./router";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";
import vueSmoothScroll from "vue-smooth-scroll";

Vue.use(vueSmoothScroll);
Vue.use(VueScrollProgressBar);
Vue.use(VueLazyload);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
