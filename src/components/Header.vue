<template lang="pug">
div(class="header")
  div(class="title")
    img(class="Shapes" src="../assets/Shapes@2x.png" alt="logo" height="40" width="40")
    h1
      | Website Redesign
    div(class="dotdotdot_title")
      div(class="dot_position")
        div(class="dot")
        div(class="dot")
        div(class="dot")
    div(class="space")
    div(class="users")
      img(src="../assets/Avatar_s.svg" height="30" width="30" alt="avatar")
      img(src="../assets/Avatar_s.svg" height="30" width="30" alt="avatar")
      img(src="../assets/Avatar_s.svg" height="30" width="30" alt="avatar")
    div(class="buttons")
      div(class="Share")
        p
          | Share
      div(class="Chat")
        div
          | Chat
  div(class="chapters")
    nav(class="nav")
      router-link(class="n_button" to = '/tasks')
        | Tasks
      router-link(class="n_button" to = '/kanban')
        | Kanban
      router-link(class="n_button" to = '/activity')
        | Activity
      router-link(class="n_button" to = '/calendar')
        | Calendar
      router-link(class="n_button" to = '/files')
        | Files
</template>

<script lang="ts">
export default {
  name: "Headr"
};
</script>

<style scoped>

</style>