<template>
  <section id="location">
    <HeroComponent :images="heroImages"/>

  </section>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'Location',
  components: {
    HeroComponent,
  },
  data() {
    return {
      heroImages: [
        {
          src: require('../assets/images/adventure-athlete-daylight-235922.jpg'),
          title: 'Where you can find fitness',
          subtitle: 'It\'s not about us, it\'s about you!',
        },
      ],
    };
  },
};
</script>
