import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: [
        {
          name: 'title',
          content: 'The best 24 hour gym in Virginia Beach! | Total Access Fitness',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: 'The best 24 hour gym in Virginia Beach! | Total Access Fitness',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com',
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: [
        {
          name: 'title',
          content: 'About Us | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: 'About Us | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com/about',
        },
      ],
    },
    {
      path: '/trainers',
      name: 'trainers',
      component: () => import(/* webpackChunkName: "location" */ './views/Trainers.vue'),
      meta: [
        {
          name: 'title',
          content: 'Our Trainers | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: 'Our Trainers | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com/trainers',
        },
      ],
    },
    {
      path: '/location',
      name: 'location',
      component: () => import(/* webpackChunkName: "location" */ './views/Location.vue'),
      meta: [
        {
          name: 'title',
          content: 'Our Location | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: 'Our Location | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com/location',
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: [
        {
          name: 'title',
          content: 'Contact Us | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: 'Contact Us | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type ',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com/contact',
        },
      ],
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "contact" */ './views/404.vue'),
      meta: [
        {
          name: 'title',
          content: '404 | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:title',
          content: '404 | Total Access Fitness | Virginia Beach',
        },
        {
          name: 'og:description',
          content: 'Your premier strength and conditioning gym in Virginia Beach',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://totalaccessfitness.com',
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
