<template>
  <div id="location">
    <HeroComponent :images="heroImages"/>
    <section class="section">
      <div class="container">
        <div class="intro content has-text-centered">
          <h2 class="intro__heading">Where can you find the best local gym in Virginia Beach?</h2>
          <p class="intro__body">You've probably seen us! We're conveniently located at the intersection of Lynnhaven and Centerville right next to the Cascade Apartments.</p>
        </div>
      </div>
    </section>
    <section class="iframe">
      <div class="columns is-vcentered is-desktop">
        <div class="column has-text-centered content iframe__content">
          <h2 class="iframe__heading">Check out our virtual tour!</h2>
          <p class="iframe__body">Tour the gym without leaving your living room or come visit us in person!</p>
          <a :href="$store.state.directionsLink" @click="this.logEvent('click', 'Location Get Directions')" class="button button--ghost" target="_blank"><span>Get directions</span></a>
        </div>
        <div class="column iframe__no-padding">
          <div class="iframe__container">
            <iframe :src="$store.state.virtualTour" class="iframe__frame" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="intro intro--blue content has-text-centered">
          <h2 class="intro__heading">Club Photos</h2>
          <p class="intro__body">Get a quick look at our club!</p>
        </div>
      </div>
    </section>
    <section class="gallery-section">
      <div class="container">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="gallery">
          <div class="gallery__item" v-for="(image, key) in images" :key="key">
            <img :src="image" class="gallery__image" @click="index = key" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="iframe__container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.016752179289!2d-76.19162618430101!3d36.77016557708856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89babc234dc8e6df%3A0x7ad12b2d43b5fcd0!2sTotal%20Access%20Fitness!5e0!3m2!1sen!2sus!4v1574905928290!5m2!1sen!2sus" class="iframe__frame" allowfullscreen></iframe>
        </div>
      </div>
    </section>
    <section class="section outro has-text-centered content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div class="outro__content">
              <h2 class="outro__heading">Ready to see us in person?</h2>
              <p class="outro__body">We're excited to meet you! If you're still unsure, feel free to contact us or check out our online specials!</p>
              <router-link to="contact" @click="this.logEvent('click', 'Location Contact Us')" class="button outro__button"><span>Contact us</span></router-link>
              <a :href="$store.state.joinUrl" @click="this.logEvent('click', 'Location Online Specials')" class="button button--alt outro__button" target="_blank"><span>Online specials!</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'Location',
  components: {
    HeroComponent,
    gallery: VueGallery,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/cardio-casual-close-up-1954524.jpg'),
          title: 'Our location',
          subtitle: 'Check us out today!',
        },
      ],
      images: [],
      index: null,
    };
  },
  mounted() {
    this.importAll(require.context('../assets/gallery/', true, /\.jpg$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push(r(key))));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.intro {
  padding: 4rem 0;
  &--blue {
    background: $primaryColor;
    position: relative;
    border-radius: 25px;
    .intro__heading {
      color: #fff;
      font-weight: 400;
    }
    .intro__body {
      color: #fff;
    }
  }
  &__body {
    font-size: 1.25rem;
    line-height: 2;
    margin-bottom: 1rem;
    max-width: 56.25rem;
    margin: 0 auto;
    max-width: 600px;
    font-style: italic;
  }
}

.iframe {
  background: #000;
  padding: 0;
  &__content {
    padding: 2rem 1.5rem;
    margin: 0;
    @media (min-width: $screen-md) {
      padding: 0 1.5rem;
    }
  }
  &__no-padding {
    padding: 0;
  }
  &__container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }
  &__frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  &__heading {
    color: #fff !important;
  }
  &__body {
    color: #fff;
    font-style: italic;
    font-size: 1.25rem;
    max-width: 26rem;
    margin: 0 auto;
  }
}

.gallery-section {
  padding: 0 1.5rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -.75rem;
  &__item {
    flex: 0 0 25%;
    padding: 0 .75rem;
    margin-bottom: 1.5rem;
  }
  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    @include transition;
    @include box-shadow;
    &:hover {
      cursor: pointer;
      transform: translateY(-1px);
    }
  }
}

.blueimp-gallery {
  .next,
  .prev {
    text-indent: -9999px;
    overflow: hidden;
    border: 0;
    background: #f9f9f9;
  }
  .next {
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('../assets/images/keyboard-right-arrow-button.png');
      background-repeat: no-repeat;
      background-position: 9px 50%;
    }
  }
  .prev {
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('../assets/images/left-arrow-key.png');
      background-repeat: no-repeat;
      background-position: 6px 50%;
    }
  }
}

.outro {
  padding: 16rem 4rem;
  background: $slate;
  @include overlay;
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
    color: #fff !important;
  }
  &__content {
    position: relative;
    z-index: 3;
  }
  &__body {
    font-size: 1.25rem;
    font-style: italic;
    color: #fff;
  }
  &__button {
    margin: 0 .5rem 1rem;
  }
}
</style>
