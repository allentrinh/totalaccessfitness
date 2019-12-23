<template>
  <div id="contact">
    <HeroComponent :images="heroImages"/>
    <section class="intro-section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet is-6-widescreen is-offset-3-widescreen has-text-centered-tablet content">
            <div class="intro">
              <h2 class="intro__heading">We can't wait to hear from you!</h2>
              <p class="intro__body">If you have questions, comments, or concerns, feel free to reach out and let us know!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-offset-2-tablet is-6-widescreen is-offset-3-widescreen">
            <div class="details">
              <div class="columns">
                <div class="column is-4">
                  <h2 class="details__label">Give us a call</h2>
                </div>
                <div class="column">
                  <p class="details__body">
                    <a
                      :href="`tel:${$store.state.telephone}`"
                      @click="this.logEvent('click', 'Contact Give Us A Call')"
                      class="details__link">
                      {{ $store.getters.formattedTelephone }}
                    </a>
                  </p>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4">
                  <h2 class="details__label">Follow us</h2>
                </div>
                <div class="column">
                  <SocialListComponent modifier="contact"/>
                </div>
              </div>
              <div class="columns">
                <div class="column is-4">
                  <h2 class="details__label">Come say hello</h2>
                </div>
                <div class="column">
                  <p class="details__body">
                    <div itemscope itemtype="http://schema.org/LocalBusiness">
                      <h3><span itemprop="name">{{ $store.state.title }}</span></h3>
                      <div itemprop="address" itemscope itemtype="
                      whttp://schema.org/PostalAddress">
                        <p><span itemprop="streetAddress">{{ $store.state.address }}, Suite {{ $store.state.suite }}</span></p>
                        <p>
                          <span itemprop="addressLocality">{{ $store.state.city }}</span>,
                          <span itemprop="addressRegion">{{ $store.state.state }}</span>&nbsp;<span itemprop="postalCode">{{ $store.state.zip }}</span>
                        </p>
                      </div>
                      <a
                        :href="$store.state.directionsLink"
                        @click="this.logEvent('click', 'Contact View in Google Maps')"
                        class="details__link"
                        target="_blank">View in Google Maps</a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <ContactFormComponent/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';
import SocialListComponent from '@/components/SocialListComponent.vue';
import ContactFormComponent from '@/components/ContactFormComponent.vue';

export default {
  name: 'Contact',
  components: {
    HeroComponent,
    SocialListComponent,
    ContactFormComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/mirror.jpg'),
          title: 'Contact Us Today',
          subtitle: 'We\'re here to help',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.intro-section {
  padding: 3rem 1.5rem 0;
}

.intro {
  &__body {
    font-size: 1.25rem;
    line-height: 2;
    font-style: italic;
    max-width: 500px;
    margin: 0 auto 1rem;
    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background: $primaryColor;
      margin: 3rem 0 0;
      border-radius: 25px;
    }
    @media (min-width: $screen-sm ) {
      &::after {
        margin: 3rem auto 0;
      }
    }
  }
}

.details {
  margin-bottom: 4rem;
  &__label {
    font-family: $font1;
    font-weight: 700 !important;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.25rem;
  }
  &__body {
    font-size: 1.125rem;
  }
  &__link {
    text-decoration: underline;
  }
}
</style>
