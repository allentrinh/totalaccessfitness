<template>
  <section class="hero" :class="isHome ? 'hero--kenburns' : 'hero--no-burns'">
    <div v-for="(img, key) in images" class="hero__wrapper" :class="{ 'hero__wrapper--active': key === 0 }">
      <div :style="`background-image: url('${img.src}');`" :key="key" class="hero__image"></div>
      <div class="hero__body has-text-centered">
        <div class="container">
          <h1 class="title hero__title">
            {{ img.title }}
          </h1>
          <h2 class="subtitle hero__subtitle">
            {{ img.subtitle }}
          </h2>
          <ul class="hero__list" v-if="isHome">
            <li class="hero__list-item">
              <a :href="$store.state.joinUrl" @click="this.logEvent('click', 'Home Hero Specials')" class="button hero__button"><span>See our online specials!</span></a>
            </li>
            <li class="hero__list-item">
              <router-link to="contact" @click="this.logEvent('click', 'Home Hero Contact Us')" class="button button--alt hero__button"><span>Contact Us</span></router-link>
            </li>
          </ul>
        </div>
        <SocialListComponent v-if="isHome" modifier="hero" />
      </div>
    </div>
    <button class="hero__mouse" @click="autoScroll()">
      <i class="fas fa-mouse"></i>
      Find out more
    </button>
  </section>
</template>

<script>
import SocialListComponent from '@/components/SocialListComponent.vue';

export default {
  name: 'HeroComponent',
  components: {
    SocialListComponent,
  },
  props: {
    images: Array,
  },
  data() {
    return {
      isHome: this.$route.name === 'home',
    };
  },
  methods: {
    startCarousel() {
      const heroImages = document.querySelectorAll('.hero__wrapper');
      const count = heroImages.length;
      const interval = 7000;
      let currentSlide = 0;
      setInterval(() => {
        heroImages[currentSlide].classList.remove('hero__wrapper--active');
        currentSlide++;
        if (currentSlide >= count) {
          currentSlide = 0;
        }
        heroImages[currentSlide].classList.add('hero__wrapper--active');
      }, interval);
    },
    autoScroll() {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: this.$el.offsetHeight,
      });
    },
  },
  mounted() {
    if (this.isHome) {
      this.startCarousel();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.hero {
  padding-top: 93px;
  overflow: hidden;
  height: 70vh;
  min-height: 500px;
  @include overlay;
  &--kenburns {
    height: 100vh;
    .hero__wrapper--active {
      .hero__image {
        animation: kenburns 50s infinite;
      }
      .hero__title,
      .hero__subtitle {
        opacity: 1;
        transform: translateY(0);
        transition-timing-function: cubic-bezier(0, .32, .32, 1);
      }
    }
  }
  &--no-burns {
    .hero__wrapper--active {
      .hero__image {
        opacity: 1;
      }
      .hero__title,
      .hero__subtitle {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    &--active {
      opacity: 1;
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    @include transition(opacity, 5s);
  }
  &__body {
    position: relative;
    align-items: center;
    display: flex;
    position: relative;
    z-index: 3;
    margin-top: 93px;
    width: 100%;
  }
  &__title,
  &__subtitle {
    color: #fff;
    opacity: 0;
    transition-property: opacity,transform;
    transition-duration: 300ms;
    transform: translateY(60px);
    @include text-shadow;
  }
  &__title {
    font-size: 3rem;
    letter-spacing: 4px;
    transition-delay: 160ms;
    font-family: $font2;
  }
  &__subtitle {
    font-size: 2rem;
    transition-delay: 200ms;
    font-family: $font1;
    font-weight: 300;
  }
  &__list {
    margin: 0 -.75rem;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  &__list-item {
    list-style: none;
    padding: 0 .75rem;
  }
  &__button {

  }
  &__mouse {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    font-size: 1.125rem;
    transform: translateX(-50%);
    border: 0;
    background: transparent;
    color: #fff;
    font-family: $font1;
    font-weight: 700;
    letter-spacing: 1px;
    font-style: italic;
    z-index: 9;
    opacity: .5;
    background-image: url('~@/assets/mouse.svg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    padding-top: 2rem;
    background-size: 1.563rem;
    @include transition;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
