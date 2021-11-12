<template lang="pug">
div(class="general")
  Sidebar
  div(class="gside")
    Header
    div(class="content_zone")
      router-view
</template>

<script lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
export default defineComponent ({
  components: { Sidebar, Header },
  name: "Layout"
});
</script>

<style scoped>

</style>