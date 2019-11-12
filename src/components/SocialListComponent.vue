<template>
  <ul class="social">
    <li v-for="(link, key) in $store.state.socialLinks" :key="key">
      <a :href="link.link" :title="link.title" target="_blank"><i class="fa" :class="link.icon"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SocialListComponent',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.social {
  li {
    list-style: none;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-bottom: 1rem;
    @include transition;
    &:hover {
      background: $primaryColor;
      border-color: $primaryColor;
    }
  }
}
</style>