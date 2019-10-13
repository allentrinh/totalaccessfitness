<template>
  <header id="header" class="header">
    <div class="container">
      <div class="columns is-vcentered is-mobile">
        <div class="column">
          <router-link to="" class="logo">
            <img src="../assets/logo.png" :alt="$store.state.name" />
          </router-link>
        </div>
        <div class="column has-text-right">
          <div class="header-actions">
            <a :href="$store.state.joinUrl" class="join-today button" target="_blank">
              <span>Join today!</span>
            </a>
            <NavigationButton/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationButton from '@/components/NavigationButton.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.header {
  background: rgba(0, 0, 0, .5);
  padding: .75rem;
}

.logo {
  display: inline-block;
  width: 150px;
  line-height: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.join-today {
  font-family: $font1;
  font-weight: 900;
  font-style: italic;
}
</style>
