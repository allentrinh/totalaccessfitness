import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Total Access Fitness',
    joinUrl: 'http://totalaccessfitness.thememberspot.com/',
    googleAnalytics: 'UA-57099316-1',
    address: '5705 Lynnhaven Pkwy',
    suite: '105',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip: '23464',
    telephone: '7577697652',
    lat: '36.770351',
    lng: '-76.189638',
    email: 'info@totalaccessfitness.com',
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/TotalAccessFitnessCascade/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/totalaccessfit',
      },
      {
        name: 'instagram',
        link: 'http://instagram.com/totalaccessfitness/',
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
      console.log(state.navActive)
    },
  },
  actions: {

  },
});
