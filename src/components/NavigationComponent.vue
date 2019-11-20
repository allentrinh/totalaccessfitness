<template>
  <nav class="navigation">
    <div class="container is-narrow">
      <div class="columns">
        <div class="column">
          <button class="navigation__link navigation__link--hidden" aria-hidden="true"></button>
          <ul class="navigation__list">
            <li class="navigation__list-item" v-for="(route, index) in routes" :key="index">
              <router-link class="navigation__link" :to="route.path">
                <span>{{ route.name | capitalize }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="column is-vbottom contact-column">
          <SocialListComponent/>
          <div class="contact">
            <h4 class="contact__heading">Contact Us</h4>
            <ul class="contact__links">
              <li class="contact__list-item">
                <a :href="`mailto:${$store.state.email}`" class="contact__link contact__link--email">
                  {{ $store.state.email }}
                </a>
              </li>
              <li class="contact__list-item">
                <a :href="`tel:${$store.state.telephone}`" class="contact__link">
                  {{ $store.getters.formattedTelephone }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SocialListComponent from '@/components/SocialListComponent.vue';

export default {
  name: 'NavigationComponent',
  components: {
    SocialListComponent,
  },
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      const str = value.toString();
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.container.is-narrow {
  max-width: $screen-md;
}

.navigation-open {
  .navigation {
    opacity: 1;
    transform: translateX(0);
    &__list {
      @for $i from 1 through 5 {
        $delay: $i * .15;
        li:nth-child(#{$i}) {
          .navigation__link {
            animation-delay: #{$delay}s;
          }
        }
      }
    }
    &__link {
      animation-name: fadeInLeft;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  .social {
    @for $i from 1 through 3 {
    $delays: 1.05s, 1.2s, 1.35s;
      li:nth-child(#{$i}) {
        animation-delay: nth($delays, $i);
      }
    }
    li {
      animation-name: fadeInRight;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  .contact {
    &__heading {
      animation-name: fadeInRight;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-delay: 1.5s;
    }
    &__links {
      $delays: 1.65s, 1.8s;
      @for $i from 1 through 2 {
        li:nth-child(#{$i}) {
          .contact__link {
            animation-delay: nth($delays, $i);
          }
        }
      }
    }
    &__link {
      animation-name: fadeInRight;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
}

.navigation {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $primaryColor;
  transform: translateX(-100%);
  opacity: .5;
  @include transition(transform, .3s, cubic-bezier(.25, .8, .25, 1));
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 3rem;
    @media (min-width: $screen-sm) {
      padding-left: 4rem;
    }
  }
  &__link {
    font-size: 2rem;
    color: #fff;
    padding: 2rem 0;
    display: inline-block;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
    opacity: 0;
    position: relative;
    &:hover,
    &:focus  {
      color: #fff;
      outline: 0;
      &:before {
        opacity: 1;
      }
    }
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 20%;
      background: darken($primaryColor, 20%);
      position: absolute;
      bottom: 2rem;
      left: 0;
      opacity: 0;
      @include transition;
    }
    &--hidden {
      opacity: 0;
      border: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
    @media (min-width: $screen-sm) {
      font-size: 3rem;
    }
    span {
      position: relative;
    }
  }
}

.contact-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 3rem;
  padding-bottom: 3rem;
  @media (min-width: $screen-sm) {
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 4rem;
  }
  .social {
    display: none;
    margin-top: 3rem;
    @media (min-width: $screen-sm) {
      display: block;
    }
    li {
      opacity: 0;
    }
    a {
      &:hover {
        color: $primaryColor;
        background: #fff;
      }
    }
  }
}

.contact {
  &__heading {
    text-transform: uppercase;
    color: #111;
    font-weight: 700;
    font-family: $font1;
    letter-spacing: 2px;
    opacity: 0;
    padding-left: 3rem;
    @media (min-width: $screen-sm) {
      text-align: right;
    }
  }
  &__links {
    list-style: none;
    margin: 0;
    padding-left: 3rem;
    @media (min-width: $screen-sm) {
      text-align: right;
    }
  }
  &__list-item {
    list-style: none;
  }
  &__link {
    color: #111;
    font-family: $font1;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    opacity: 0;
    display: inline-block;
    &--email {
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        display: block;
        background: #fff;
        width: 100%;
        height: 2px;
        @include transition;
      }
      &:hover {
        &::after {
          transform: translateX(100%);
        }
      }
    }
  }
}
</style>
