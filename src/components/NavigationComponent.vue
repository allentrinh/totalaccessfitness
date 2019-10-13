<template>
  <nav class="navigation" :class="{ 'active': $store.state.navActive }">
    <button class="close" @click="$store.commit('toggleNav')">
      <i class="fa fa-close"></i>
    </button>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link class="nav-link" :to="route.path">
          {{ route.name | capitalize }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';

.navigation {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: #fff;
}

.close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: #fff;
  font-size: 2rem;
  background: transparent;
  border: 0;
}

.active {
  background: $primaryColor;
}
</style>
