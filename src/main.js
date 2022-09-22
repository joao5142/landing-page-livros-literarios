import Vue from "vue";
import App from "./App.vue";
import VueDragscroll from "vue-dragscroll";
import Fragment from "vue-fragment";
import AOS from "aos";
import "aos/dist/aos.css";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.use(VueDragscroll);

new Vue({
  render: (h) => h(App),
  vuetify,

  mounted() {
    AOS.init();
  }
}).$mount("#app");
