import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Total Access Fitness',
    joinUrl: 'http://totalaccessfitness.thememberspot.com/',
    virtualTour: 'https://my.matterport.com/show/?m=hvUeWaxrXpU',
    googleAnalytics: 'UA-57099316-1',
    address: '5705 Lynnhaven Pkwy',
    suite: '105',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip: '23464',
    telephone: '7577697652',
    massagePhone: '7576920675',
    lat: '36.770351',
    lng: '-76.189638',
    email: 'info@totalaccessfitness.com',
    socialLinks: [
      {
        title: 'Like us on Facebook!',
        link: 'https://www.facebook.com/TotalAccessFitnessCascade/',
        icon: 'fa-facebook',
      },
      {
        title: 'Follow us on Twitter!',
        link: 'https://twitter.com/totalaccessfit',
        icon: 'fa-twitter',
      },
      {
        title: 'Follow us on Instagram!',
        link: 'http://instagram.com/totalaccessfitness/',
        icon: 'fa-instagram',
      },
    ],
    hours: [
      {
        day: 'monday',
        hours: '12:00 PM – 8:00 PM',
      },
      {
        day: 'tuesday',
        hours: '12:00 PM – 8:00 PM',
      },
      {
        day: 'wednesday',
        hours: '12:00 PM – 8:00 PM',
      },
      {
        day: 'thursday',
        hours: '12:00 PM – 8:00 PM',
      },
      {
        day: 'friday',
        hours: '12:00 PM – 6:00 PM',
      },
      {
        day: 'saturday',
        hours: '12:00 PM – 6:00 PM',
      },
      {
        day: 'sunday',
        hours: 'Appointments Only',
      },
    ],
    navActive: false,
  },
  mutations: {
    toggleNav(state) {
      state.navActive = !state.navActive;
      if (state.navActive) {
        const navigationLink = document.querySelector('.navigation__link');
        navigationLink.focus();

        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape') {
            this.commit('closeNav');
          }
        });
      }
    },
    closeNav(state) {
      state.navActive = false;

      document.removeEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.commit('closeNav');
        }
      });
    },
  },
  getters: {
    formattedTelephone: (state, getters) => {
      const original = state.telephone;
      const match = original.match(/^(\d{3})(\d{3})(\d{4})$/);
      return `${match[1]}.${match[2]}.${match[3]}`;
    },
  },
  actions: {

  },
});
