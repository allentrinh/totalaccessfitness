<template>
  <footer id="footer" class="section">
    <div class="container">
      <div class="columns has-space-between">
        <div class="column is-4">
          <router-link to="/" class="logo">
            <img :src="require(`@/assets/logo.png`)" :alt="$store.state.title + ' Logo'" />
          </router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tempora praesentium, nam consectetur est mollitia quam aut dignissimos totam animi magni alias enim aliquam laboriosam delectus. Architecto atque suscipit, porro!</p>
        </div>
        <div class="column is-2">
          <p class="copyright">&copy; {{ year }} {{ $store.state.title }}</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, consectetur reprehenderit dolores delectus quod cum tenetur quisquam vero nemo eum, rerum ullam eveniet. Sint expedita quisquam, deleniti esse hic maxime.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

#footer {
  background: #000;
}

.has-space-between {
  justify-content: space-between;
}

.logo {
  display: inline-block;
  max-width: 150px;
}
</style>
