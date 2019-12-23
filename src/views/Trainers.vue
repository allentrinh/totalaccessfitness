<template>
  <div id="trainers">
    <HeroComponent :images="heroImages"/>
    <section class="section content">
      <div class="container">
        <div class="columns">
          <div class="column is-4-widescreen">
            <h2>The best trainers in Virginia Beach!</h2>
            <p class="intro">Why might you need a personal trainer? There are many reasons! Our trainers bring years of experience and knowledge to each session. If you're new to fitness or just need a little extra push, our trainers can provide you with the motivation, the clarity, and the confidence to reach your fitness goals!</p>
          </div>
          <div class="column">
            <div class="trainers">
              <div v-for="(trainer, key) in trainers" class="trainers__trainer" :key="key">
                <div class="trainers__wrapper">
                  <!-- <img :src="trainer.photo" class="trainers__image" :alt="fullName(trainer) + '\'s Profile Picture'"> -->
                  <div class="trainers__content">
                    <h3 class="trainers__heading">{{ fullName(trainer) }}</h3>
                    <ul class="trainers__social" v-if="trainer.social.length">
                      <li v-for="(social, key) in trainer.social" :key="key" class="trainers__social-item">
                        <a :href="social.link" class="trainers__social-link" target="_blank">
                          <i class="fa" :class="social.icon"></i>
                        </a>
                      </li>
                    </ul>
                    <div class="trainers__focus" v-if="trainer.focus.length">
                      <ul class="trainers__list">
                        <li class="trainers__list-item" v-for="(focus, key) in trainer.focus" :key="key">
                          {{ focus }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="trainers__footer">
                    <a :href="'tel:' + cleanPhone(trainer.phone)" @click="this.logEvent('click', 'Trainer Call ' + fullName(trainer))" class="trainers__phone button trainers__button">
                      <span>Call {{ trainer.firstName }}!</span>
                    </a>
                    <a :href="trainer.website" v-if="trainer.website" @click="this.logEvent('click', 'Trainer Website ' + fullName(trainer))"
                      class="button button--alt trainers__button trainers__button--ghost" target="_blank">
                      <span>Website <i class="fa fa-external-link trainers__external"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section outro has-text-centered content">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3 has-text-centered">
            <div class="outro__content">
              <h2 class="outro__heading">Don't need a trainer?</h2>
              <p class="outro__body">That's okay! Check out our online specials or contact us today for other offers!</p>
              <router-link to="contact" class="button outro__button"><span>Contact us</span></router-link>
              <a :href="$store.state.joinUrl" class="button button--alt outro__button" target="_blank"><span>Online specials!</span></a>
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
  name: 'Trainers',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/man-carrying-barbel-791763.jpg'),
          title: 'Find a Trainer',
          subtitle: 'Helping you break your limits!',
        },
      ],
      trainers: [
        {
          firstName: 'Andrew',
          lastName: 'Delcarmen',
          photo: 'https://placehold.it/400x200',
          focus: [
            'Bodybuilding',
            'Strength',
            'Nutrition',
          ],
          phone: '757.650.8054',
          email: 'andrewdelcarmen@yahoo.com',
          website: '',
          social: [
            {
              platform: 'instagram',
              link: 'https://www.instagram.com/delcarmen_fit',
              icon: 'fa-instagram',
            },
          ],
        },
        {
          firstName: 'Zack',
          lastName: 'Mathews',
          photo: 'https://placehold.it/400x200',
          focus: [
            'Personal Training',
          ],
          phone: '951.294.0883',
          email: 'zackmathews@vbafitness.com',
          website: 'https://www.vbafitness.com',
          social: [
          ],
        },
        {
          firstName: 'Timothy',
          lastName: 'Vaughan',
          photo: 'https://placehold.it/400x200',
          focus: [
            'Personal Training',
          ],
          phone: '757.576.5797',
          email: 'hrredskinsII@gmail.com',
          website: '',
          social: [
          ],
        },
      ],
    };
  },
  methods: {
    fullName(person) {
      return `${person.firstName} ${person.lastName}`;
    },
    cleanPhone(tel) {
      return tel.replace(/[^+\d]+/g, '');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.intro {
  padding: 0;
  font-size: 1.25rem;
  line-height: 2;
  margin-bottom: 1rem;
  font-style: italic;
}

.trainers {
  display: flex;
  flex-wrap: wrap;
  @media (min-width: $screen-md) {
    margin: 0 -.75rem;
  }
  &__trainer {
    margin-bottom: 2rem;
    flex: 0 100%;
    @media (min-width: $screen-md) {
      padding: 0 .75rem;
      flex: 0 50%;
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  }
  &__image {
    width: 100%;
  }
  &__content {
    padding: 1rem;
    flex: 1;
  }
  &__list {
    margin: 0;
    padding: 0;
  }
  &__list-item {
    list-style: none;
    font-size: .715rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 1px solid $slate;
    color: $slate;
    opacity: .5;
    display: inline-block;
    letter-spacing: 1px;
    padding: .25rem 1rem;
    border-radius: 14px;
    margin-right: .75rem;
  }
  &__social {
    margin: 0;
    padding: 0;
  }
  &__social-item {
    list-style: none;
    }
    &__social-link {
    width: 32px;
    height: 32px;
    background: $slate;
    display: inline-block;
    color: #fff;
    text-align: center;
    padding-top: 4px;
    border-radius: 50%;
    @include transition;
    &:hover {
      color: #fff;
      background: lighten($slate, 10);
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 5px $complementaryColor;
    }
  }
  &__button {
    margin-right: .75rem;
  }
  &__external {
    font-size: .8rem;
    margin-left: .125rem;
  }
  &__footer {
    border-top: 1px solid $gray;
    padding: 1rem;
  }
}

.outro {
  padding: 16rem 4rem;
  background: $slate;
  @include overlay;
  &__heading {
    font-family: $font2;
    letter-spacing: 3px;
    color: #fff;
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
