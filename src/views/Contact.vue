<template>
  <header id="header">
    <div class="container">
      fjdsalk;fjdkl
      <button @click="$store.commit('toggleNav')">
        CLICK ME
      </button>
      <div class="hello" v-if="$store.state.navActive">
        Hello!!!!
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Contact',
};
</script>
