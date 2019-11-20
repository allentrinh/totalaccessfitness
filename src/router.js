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
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.',
        },
      ],
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.',
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.',
        },
      ],
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),

    },
    {
      path: '/trainers',
      name: 'trainers',
      // route level code-splitting
      // this generates a separate chunk (location.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "location" */ './views/Trainers.vue'),
    },
    {
      path: '/location',
      name: 'location',
      // route level code-splitting
      // this generates a separate chunk (location.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "location" */ './views/Location.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (contact.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
});
