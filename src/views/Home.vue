<template>
  <div id="home">
    <HeroComponent :images="heroImages"/>
    <!--
    <section class="section team-taf">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h2 class="team-taf__header">#teamtaf</h2>
          </div>
          <div class="column">
            <div class="team-taf__about">
              <h3 class="team-taf__about-heading">About Us</h3>
              <p class="team-taf__body">Total Access Fitness was started on the foundation of clean, affordable, and convenient fitness. We believe in health and fitness and once you’re a member, our doors are always open for you, holidays included!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
    <section class="home">
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/gallery/17918012_1307244455978031_7272557509456730234_o.jpg`)});`" class="home__background">
              <h2 class="home__heading">Total Access Fitness Club</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Total Access Fitness is unlike any other gym. We’re a community. Our facility offers true 24 hour access -- rain or shine, our doors are always open to our members. Free WiFi included!</p>
              <p class="home__em">Membership plans start at $29.99/<small class="home__small">month</small></p>
              <a :href="$store.state.joinUrl" @click="this.logEvent('click', 'Home Content Specials')" class="button" target="_blank"><span>See our specials!</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/gallery/17880322_1307244889311321_5925839801246484336_o.jpg`)});`" class="home__background">
              <h2 class="home__heading">Cardio Equipment</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">It's not a gym without plenty of cardio equipment! Challenge your heart with spin bikes, treadmills, arc trainers, ellipticals, and more!</p>
              <a :href="$store.state.virtualTour" @click="this.logEvent('click', 'Home Content Virtual Tour')" class="button" target="_blank"><span><i class="fa fa-video-camera"></i> Explore the Virtual Tour!</span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/gallery/17917864_1307244979311312_6312840871786570258_o.jpg`)});`" class="home__background">
              <h2 class="home__heading">The Best in Selectorized Equipment</h2>
            </div>
          </div>
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">We love our equipment, We think you will too! We perform maintenance on our equipment daily to make sure you never have to wait or fuss with broken equipment!</p>
              <router-link to="location" @click="this.logEvent('click', 'Home Content View Photos')" class="button"><span>View more photos!</span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Our trainers love to teach! Attend a seminar on strength training, weight loss, nutrition and more! Yoga is also available on site!</p>
              <p class="home__em">Seminars and yoga classes are always free for members! </p>
              <p class="home__small">Admission fees also available for non-members.</p>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/gallery/17880310_1307245062644637_1370393945474578655_o.jpg`)});`" class="home__background">
              <h2 class="home__heading">Take a class</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">Training doesn't come without it's hurdles. Sometimes muscle soreness hurts! That's why we offer an in-house massage therapist who knows the human body as well as you know the weights! Find out why our members are ahead of the curve in their fitness journey. Not a member? No worries! Kelly is available to help you, athlete or not!</p>
              <p class="home__em">1 hour sessions - $35 for members!</p>
              <a :href="`tel:${$store.state.massagePhone}`" @click="this.logEvent('click', 'Home Content Book Kelly')" class="button"><span>Book Kelly!</span></a>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/love-romantic-bath-candlelight-3188.jpg`)});`" class="home__background">
              <h2 class="home__heading">In House Massage Therapy</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="home__content">
        <div class="columns is-gapless home__columns">
          <div class="column is-6 is-offset-1 content home__column">
            <div class="home__inner-content">
              <p class="home__body">We offer independently contracted trainers who have <strong class="home__strong">30+ years of combined experience</strong> in strength training, functional training, overall health and nutrition. Get together with our trainers in one-on-one sessions or find a group class!</p>
              <router-link to="trainers" @click="this.logEvent('click', 'Home Content Trainers')" class="button"><span>Find a trainer!</span></router-link>
            </div>
          </div>
          <div class="column home__column">
            <div :style="`background-image: url(${require(`@/assets/images/man-carrying-barbel-791763.jpg`)});`" class="home__background">
              <h2 class="home__heading">Find a Personal Trainer</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'Home',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/cardio-casual-close-up-1954524.jpg'),
          title: 'Build the endurance',
          subtitle: 'Out last the old you!',
        },
        {
          src: require('../assets/images/gym_slider_home2.jpg'),
          title: 'Find your potential',
          subtitle: 'Train to your limits and beyond!',
        },
        {
          src: require('../assets/images/beautiful-beauty-fitness-2036998.jpg'),
          title: 'Live a better life',
          subtitle: 'Uncover your best self!',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
@import url('https://fonts.googleapis.com/css?family=Rock+Salt&display=swap');

.team-taf {
  background: #000;
  text-align: center;
  padding: 6rem 1.5rem;
  position: relative;
  &__header {
    text-align: center;
    font-family: 'Rock Salt', cursive;
    letter-spacing: 4px;
    font-size: 3rem;
    @media (min-width: $screen-lg) {
      font-size: 6rem;
    }
  }
  &__about {
    padding: 1rem;
  }
  &__about-heading {
    font-size: 2rem;
    font-family: $font2;
    letter-spacing: 2px;
  }
  &__body {
    font-size: 1.25rem;
    font-style: italic;
  }
}

.home {
  &__columns {
    width: 100%;
  }
  &__column {
    position: relative;
    display: flex;
    align-items: center;
  }
  &__content {
    display: flex;
    background-color: $primaryColor;
    &:nth-child(odd) {
      background-color: darken($primaryColor, 10%);
    }
    @media (min-width: $screen-lg) {
      height: 100vh;
    }
  }
  &__inner-content {
    font-family: $font1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.25rem;
    color: #fff;
    text-align: center;
    font-style: italic;
    max-width: 700px;
    margin: 0 auto;
    padding: 4rem 1rem;
    @media (min-width: $screen-sm) {
      padding: 4rem 3rem;
    }
  }
  &__body {
    font-size: 1.25rem;
  }
  &__strong {
    color: #fff;
  }
  &__em {
    font-family: $font2;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 2px;
  }
  &__small {
    font-size: .85rem;
    letter-spacing: 1px;
  }
  &__background {
    padding: 6rem 1rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // @include overlay;
    @media (min-width: $screen-sm) {
      position: absolute;
      top: 0;
      left: 0;
    }
    @media (min-width: $screen-lg) {
      background-attachment: fixed;
    }
  }
  &__heading {
    font-family: $font2;
    font-size: 3rem;
    color: #fff;
  }
}
</style>
