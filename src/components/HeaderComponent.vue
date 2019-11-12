<template>
  <header id="header" class="header" @scroll.passive="stickifyHeader">
    <div class="container">
      <div class="columns is-vcentered is-mobile">
        <div class="column">
          <router-link to="/" class="logo">
            <img :src="require(`@/assets/logo.png`)" :alt="$store.state.title + ' Logo'" @click="$store.commit('closeNav')" />
          </router-link>
        </div>
        <div class="column has-text-right">
          <div class="header-actions">
            <a :href="$store.state.joinUrl" class="join-today button" target="_blank">
              <span>Join today!</span>
            </a>
            <NavigationButtonComponent/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationButtonComponent from '@/components/NavigationButtonComponent.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationButtonComponent,
  },
  data() {
    return {
      currentTop: 0,
    };
  },
  methods: {
    stickifyHeader() {
      const top = window.scrollY;
      const header = this.$el;
      if (top < this.currentTop) {
        header.classList.add('stickify');
      } else {
        header.classList.remove('stickify');
        header.classList.add('animate-out');
        setTimeout(() => header.classList.remove('animate-out'), 300);
      }
      this.currentTop = top;
    },
  },
  created() {
    window.addEventListener('scroll', this.stickifyHeader, {
      capture: true,
      passive: true
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.stickifyHeader, {
      capture: true,
      passive: true
    });
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.navigation-open {
  .header {
    background: rgba(0, 0, 0, 0);
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    transform: translateY(0) !important;
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(25, 54, 68, .5);
  padding: .75rem;
  z-index: 9999;
  @include transition;
  &.stickify {
    position: fixed;
    top: auto;
    bottom: 100%;
    transform: translateY(100%);
  }
  &.animate-out {
    position: fixed;
    top: auto;
    bottom: 100%;
    transform: translateY(0);
  }
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
  font-style: italic;
}
</style>
