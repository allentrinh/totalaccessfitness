<template>
  <footer id="footer" class="footer section">
    <div class="container is-fluid">
      <div class="columns has-text-centered has-space-between is-vbottomed">
        <div class="column is-3 has-text-left-tablet">
          <router-link to="/" class="footer__logo">
            <img :src="require(`@/assets/logo.png`)" :alt="$store.state.title + ' Logo'" />
          </router-link>
          <div class="footer__social">
            <SocialListComponent/>
          </div>
        </div>
        <div class="column is-3 has-text-right-tablet">
          <router-link to="contact" class="button button--ghost footer__button">Contact</router-link>
          <p class="footer__copyright">&copy; {{ year }} {{ $store.state.title }} - All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialListComponent from '@/components/SocialListComponent.vue';

export default {
  name: 'FooterComponent',
  components: {
    SocialListComponent,
  },
  computed: {
    year() {
      const date = new Date();
      return date.getFullYear();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.has-space-between {
  justify-content: space-between;
}

.is-vbottomed {
  align-items: baseline;
}

.footer {
  background: #000;
  padding: 3rem 1.5rem;
  &__logo {
    display: inline-block;
    max-width: 150px;
    margin-bottom: 1rem;
  }
  &__button {
    margin-bottom: 1rem;
  }
  &__copyright {
    color: #fff;
  }
  &__social {
    .social {
      display: flex;
      flex-direction: row;
      justify-content: center;
      @media (min-width: $screen-sm) {
        justify-content: flex-start;
      }
      &__list-item {
        + li {
          margin-left: .85rem;
        }
      }
      &__link {
        margin-bottom: 0;
      }
    }
  }
}
</style>
