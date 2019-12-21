<template>
  <div id="app" :class="{ 'navigation-open': $store.state.navActive }">
    <HeaderComponent v-if="$route.name != '404'" />
    <main id="content">
      <transition name="router-animation"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        duration="200">
        <router-view/>
      </transition>
    </main>
    <FooterComponent v-if="$route.name != '404'"/>
    <NavigationComponent v-if="$route.name != '404'"/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  },
  methods: {
    resetMeta() {
      const types = [
        'description',
        'og:title',
        'og:description',
        'og:type ',
        'og:url',
      ];

      types.forEach(type => {
        const meta = document.querySelector('meta[name="' + type + '"]');
        if (meta) {
          meta.parentNode.removeChild(meta);
        }
      });
    },
    updateMeta(meta) {
      for (const key in meta) {
        if (meta[key].name === 'title') {
          document.title = meta[key].content;
        } else {
          const m = document.createElement('meta');
          m.name = meta[key].name;
          m.content = meta[key].content;

          const referenceNode = document.querySelector('link[rel="icon"]');
          referenceNode.parentNode.insertBefore(m, referenceNode);
        }
      }
    },
  },
  mounted() {
    this.resetMeta();
    this.updateMeta(this.$route.meta);
  },
  watch: {
    $route(to, from) {
      this.$store.commit('closeNav');
      this.resetMeta();
      this.updateMeta(to.meta);
    },
  },
};
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
</style>'',
