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
.general {
  display: flex;
  min-height: 100vh;
  min-width: 100vh;
  background-color: #EAEAEA;
}
.gside {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.content_zone {
  display: flex;
  min-width: 100vh;
  min-height: 100vh;
  justify-content: center;
}
</style>