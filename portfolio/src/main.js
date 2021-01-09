import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import router from "./router";

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
