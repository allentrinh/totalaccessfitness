<template>
  <div id="app" :class="{ 'navigation-open': $store.state.navActive }">
    <HeaderComponent/>
    <main id="content">
      <transition name="router-animation" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="200">
        <router-view/>
      </transition>
    </main>
    <FooterComponent/>
    <!-- <NavigationComponent/> -->
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
  watch: {
    $route(to, from) {
      // Add function to update meta data
      console.log(to)
      console.log(from)
    }
  }
};
</script>
