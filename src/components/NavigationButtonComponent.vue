<template>
  <button @click="$store.commit('toggleNav')" class="toggle-navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'NavigationButtonComponent',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.toggle-navigation {
  background: transparent;
  border: 0;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 1.5rem;
  padding: 0 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @include transition;
  @include box-shadow;
  &:hover {
    span {
      &:nth-child(1) {
        transform: translateY(-1px);
      }
      &:nth-child(3) {
        transform: translateY(1px);
      }
    }
  }
  span {
    display: block;
    background: #000;
    width: 20px;
    height: 2px;
    &:nth-child(2) {
      margin-top: 3px;
      width: 15px;
    }
    &:nth-child(3) {
      width: 22px;
      margin-top: 3px;
    }
  }
}
</style>
