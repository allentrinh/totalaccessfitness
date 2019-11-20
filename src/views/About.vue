<template>
  <div id="about">
    <HeroComponent :images="heroImages"/>
    <section class="about section content">
      <div class="container">
        <h2 class="about__heading">Who we are</h2>
        <div class="columns">
          <div class="column is-3">
            <h3 class="about__heading-3">We are:</h3>
            <ul class="hashtags">
              <li class="hashtags__list-item">#teamtaf</li>
              <li class="hashtags__list-item">#tafletes</li>
              <li class="hashtags__list-item">#local</li>
              <li class="hashtags__list-item">#community</li>
            </ul>
          </div>
          <div class="column is-9">
            <p class="about__body">Established in 2014, we have strived to provide our city of <em class="about__em">Virginia Beach, VA</em> a better fitness experience. One that doesn't place limits. One that continues to grow with our members. We believe that health and fitness is essential to reaching any individual's full potential in every aspect of their lives, and we love hearing the success stories that our members bring us when they reach new peaks!</p>
            <p class="about__body">Since opening our doors in our humble first location near the Virginia Beach Court Houses, we have moved and expanded our establishment to <em class="about__em">5,465 square feet</em> to meet the needs of our evergrowing community. You can find all the cardio, strength, and functional training equipment you need to reach your goals and keep you on track!</p>
            <a :href="$store.state.joinUrl" class="button" target="_blank"><span>Become a TAFlete today!</span></a>
          </div>
        </div>
      </div>
    </section>
    <section class="section mini-gallery">
      <div class="container-fluid">
        <div class="columns is-mobile">
          <div class="column is-4">
            <img :src="require(`@/assets/images/revslide2.jpg`)" class="mini-gallery__image" alt="Hooded woman using rowing machine">
          </div>
          <div class="column is-8">
            <img :src="require(`@/assets/images/man-carrying-barbel-791763.jpg`)" class="mini-gallery__image" alt="Man deadlifting">
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-8">
            <img :src="require(`@/assets/images/revslide-1.jpg`)" class="mini-gallery__image" alt="Smiling woman sitting with exercise slam ball">
          </div>
          <div class="column is-4">
            <img :src="require(`@/assets/images/ropes.jpg`)" class="mini-gallery__image" alt="Woman using battle ropes">
          </div>
        </div>
      </div>
    </section>
    <section class="mission section content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <h2 class="mission__heading">Our Mission</h2>
            <p class="mission__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eum, facilis. Doloremque magni eos quae eum aliquid, est illum pariatur, tenetur molestias, perspiciatis consectetur voluptate alias vel facere ab eveniet.</p>
            <router-link to="location" class="button mission__button"><span>Check out our location</span></router-link>
            <a :href="$store.state.joinUrl" class="button button--alt mission__button" target="_blank"><span>See our current specials!</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'About',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/adventure-athlete-daylight-235922.jpg'),
          title: 'Why Total Access Fitness?',
          subtitle: 'It\'s not about us, it\'s about you!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.about {
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
  }
  &__heading-3 {
    opacity: .5;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  &__body {
    font-size: 1.25rem;
    line-height: 2;
    margin-bottom: 1rem;
  }
  &__em {
    font-style: italic;
    font-weight: 700;
  }
}

.hashtags {
  margin: 0;
  padding: 0;
  &__list-item {
    display: inline-block;
    list-style: none;
    font-size: 1.125rem;
    font-weight: 700;
    color: $primaryColor;
    letter-spacing: 1px;
    padding-right: 1rem;
  }
}

.mini-gallery {
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.mission {
  padding: 16rem 4rem;
  background: darken($primaryColor, 5);
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
  }
  &__body {
    font-size: 1.25rem;
  }
  &__button {
    margin: 0 .5rem 1rem;
  }
}
</style>
