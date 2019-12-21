<template>
  <ul class="social" :class="`social--${modifier}`">
    <li class="social__list-item" v-for="(link, key) in $store.state.socialLinks" :key="key">
      <a :href="link.link" :title="link.title" class="social__link" target="_blank"><i class="fa" :class="link.icon"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialListComponent',
  props: {
    modifier: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.navigation-open {
  .social {
    @for $i from 1 through 3 {
    $delays: 1.05s, 1.2s, 1.35s;
      &__list-item:nth-child(#{$i}) {
        animation-delay: nth($delays, $i);
      }
    }
    &__list-item {
      animation-name: fadeInRight;
      animation-duration: .2s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
}

.social {
  &--hero {
    display: none;
    @media (min-width: $screen-lg) {
      display: block;
      position: absolute;
      z-index: 9;
      top: 50%;
      transform: translateY(-50%);
      right: 3rem;
    }
  }
  &--navigation {
    display: none;
    margin-top: 3rem;
    @media (min-width: $screen-sm) {
      display: block;
    }
    .social__list-item {
      opacity: 0;
      display: block;
    }
    .social__link {
      background-color: transparent;
      margin-bottom: 1rem !important;
      &:hover {
        color: #fff;
        background: darken($primaryColor, 20);
      }
    }
  }
  &--footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: $screen-sm) {
      justify-content: flex-start;
    }
    .social__list-item {
      + .social__list-item {
        margin-left: .85rem;
      }
    }
    .social__link {
      margin-bottom: 0;
      margin-right: 0;
      background-color: transparent;
      &:hover {
        color: #fff ;
      }
    }
  }
  &--contact {
    .social__list-item {
      display: inline-block;
    }
    .social__link {
      margin-bottom: 0;
      background: $slate;
      margin-right: 1rem;
    }
  }
  &__list-item {
    list-style: none;
  }
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-bottom: 1rem;
    @include transition;
    &:hover,
    &:focus {
      color: #fff;
      background: $primaryColor;
      border-color: $primaryColor;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 5px $complementaryColor;
    }
  }
}
</style>