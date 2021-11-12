<template lang="pug">
div(class="aside")
  div(class="Proj")
    img(src="../assets/Logo@3x.svg" width="32" height="30" alt="logo" class="logo")
    div
      h2
        | PROJECTUS
  div(class="avaka")
    img(:src='User.avatar' width="48" height="48" alt="Avatar" class="Avatar")
    ul
      li(class="name")
        | {{User.name}}
      li(class="status")
        | {{User.tag}}
    div(class="dotdotdot_avka")
      div(class="dot")
      div(class="dot")
      div(class="dot")
  div(class="compl_task")
    ul(class="Completed" @click="TaskChanger")
      li(class="number")
        | {{compl}}
      li(class="Tasks")
        | Completed Tasks
    ul(class="Open")
      li(class="number")
        | {{open}}
      li(class="Tasks")
        | Open Tasks
  div(class="menu")
    h2
      | MENU
    div(class="Notif")
      p
    ul
      li
        | Home
      li
        | My Tasks
      li
        | Notifications
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent ({
  name: "Sidebar",
  data (): Record<string, any>{
    return {
      User: {
        avatar: require('../assets/Avatar.svg'),
        name: 'Jean Gonzales',
        tag: 'Product Owner',
      },
      compl: 328,
      open: 10,
    }
  },
  methods: {
    TaskChanger(){
      const sumbit = confirm('Are you sure you want to change the number of tasks?')
      if (sumbit && this.open > 0){
        this.compl++
        this.open--
      }
    }
  }
});
</script>

<style scoped>

</style>