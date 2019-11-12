<template>
  <section class="hero" :class="{ kenburns: isHome }">
    <div v-for="(img, key) in images" class="hero-wrapper" :class="{ active: key === 0 }">
      <div :style="`background-image: url('${img.src}');`" :key="key" class="hero-image"></div>
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            {{ img.title }}
          </h1>
          <h2 class="subtitle">
            {{ img.subtitle }}
          </h2>
        </div>
        <SocialListComponent v-if="isHome" />
      </div>
    </div>
    <button class="find-out-more" @click="autoScroll()">
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
      const heroImages = document.querySelectorAll('.hero-wrapper');
      const count = heroImages.length;
      const interval = 7000;
      let currentSlide = 0;
      setInterval(() => {
        heroImages[currentSlide].classList.remove('active');
        currentSlide++;
        if (currentSlide >= count) {
          currentSlide = 0;
        }
        heroImages[currentSlide].classList.add('active');
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
    this.startCarousel();
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.hero {
  position: relative;
  padding-top: 93px;
  overflow: hidden;
  height: 70vh;
  min-height: 500px;
  @include overlay;
}

.kenburns {
  .active {
    .hero-image {
      animation: kenburns 50s infinite;
    }
    .title,
    .subtitle {
      opacity: 1;
      transform: translateY(0);
      transition-timing-function: cubic-bezier(0, .32, .32, 1);
    }
  }
}

.hero-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  &.active {
    opacity: 1;
  }
}

.hero-image {
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

.hero-body {
  position: relative;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 3;
  margin-top: 93px;
}

.title,
.subtitle {
  color: #fff;
  opacity: 0;
  transition-property: opacity,transform;
  transition-duration: 300ms;
  transform: translateY(60px);
  @include text-shadow;
}

.title {
  font-size: 3rem;
  letter-spacing: 4px;
  transition-delay: 160ms;
  font-family: $font2;
  font-weight: 700;
}

.subtitle {
  font-size: 2rem;
  transition-delay: 200ms;
  font-family: $font1;
  font-weight: 300;
}

.find-out-more {
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

.social {
  position: absolute;
  z-index: 9;
  top: 50%;
  transform: translateY(-50%);
  right: 3rem;
  display: none;
  @media (min-width: $screen-lg) {
    display: block;
  }
}
</style>
