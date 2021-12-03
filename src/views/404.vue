<template lang="pug">
.general
  p(class="NotFound")
    | Page not found
  router-link(class="Back" to="/")
    | Back to home page
</template>

<script lang="ts">
export default {
  name: "404"
};
</script>

<style scoped>
.general {
  min-height: 100vh;
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.NotFound {
  font-family: Helvetica;
  font-size: 60px;
  color: #42b983;
}
.Back {
  font-size: 40px;
  font-family: Helvetica;
  color: #9B9B9B;
}
</style>