<template>
  <nav class="navigation">
    <div class="container is-narrow">
      <div class="columns">
        <div class="column">
          <ul class="nav">
            <li v-for="(route, index) in routes" :key="index">
              <router-link class="nav-link" :to="route.path">
                <span>{{ route.name | capitalize }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="column is-vbottom contact-column">
          <SocialListComponent/>
          <div class="contact">
            <h4 class="contact-heading">Contact Us</h4>
            <ul class="contact-links">
              <li><a :href="`mailto:${$store.state.email}`" class="contact-link email">{{ $store.state.email }}</a></li>
              <li><a :href="`tel:${$store.state.telephone}`" class="contact-link phone">{{ $store.getters.formattedTelephone }}</a></li>
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
  }
  .nav-link {
    animation-name: fadeInLeft;
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .nav {
    @for $i from 1 through 4 {
      $delay: $i * .15;
      li:nth-child(#{$i}) {
        .nav-link {
          animation-delay: #{$delay}s;
        }
      }
    }
  }
  .social {
    @for $i from 1 through 3 {
    $delays: .9s, 1.05s, 1.2s;
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
  .contact-heading {
    animation-name: fadeInRight;
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 1.35s;
  }
  .contact-link {
    animation-name: fadeInRight;
    animation-duration: .2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .contact-links {
    $delays: 1.5s, 1.65s;
    @for $i from 1 through 2 {
      li:nth-child(#{$i}) {
        .contact-link {
          animation-delay: nth($delays, $i);
        }
      }
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
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 3rem;
  @media (min-width: $screen-sm) {
    padding-left: 4rem;
  }
}

.nav-link {
  font-size: 2rem;
  color: #fff;
  padding: 2rem 0;
  display: inline-block;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 1px;
  opacity: 0;
  position: relative;
  &:hover {
    color: #fff;
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
  @media (min-width: $screen-sm) {
    font-size: 3rem;
  }
  span {
    position: relative;
  }
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

.contact-heading {
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

.contact-links {
  list-style: none;
  margin: 0;
  padding-left: 3rem;
  @media (min-width: $screen-sm) {
    text-align: right;
  }
  li {
    list-style: none;
  }
  .contact-link {
    color: #111;
    font-family: $font1;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    opacity: 0;
    display: inline-block;
    &.email {
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
