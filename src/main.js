import 'bulma/css/bulma.min.css';
import 'font-awesome/scss/font-awesome.scss';
import Vue from 'vue';
import App from './App.vue';
import VueGtag from "vue-gtag";
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'UA-57099316-1'
  }
}, router);

Vue.mixin({
  methods: {
    logEvent(action, label) {
      this.$gtag.event(action, { method: label });
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
