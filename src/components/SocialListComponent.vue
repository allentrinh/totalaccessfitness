<template>
  <ul class="social">
    <li class="social__list-item" v-for="(link, key) in $store.state.socialLinks" :key="key">
      <a :href="link.link" :title="link.title" class="social__link" target="_blank"><i class="fa" :class="link.icon"></i></a>
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
  &__list-item {
    list-style: none;
  }
  &__link {
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
    &:hover,
    &:focus {
      background: $primaryColor;
      border-color: $primaryColor;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 5px $complementaryColor;
    }
  }
}
</style>