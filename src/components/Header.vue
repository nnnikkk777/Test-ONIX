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
.header {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 136px;
  background-color: #FFFFFF;
}
.title {
  display: flex;
  height: 100%;
}
.nav {
  display: flex;
  font-family: Helvetica;
  font-size: 16px;
  height: 56px;
  width: 100%;
}
.dotdotdot_title {
  display: flex;
  height: 30px;
  width: 30px;
  background-color: #EAEAEA;
  border-radius: 100%;
  margin: 45px 0 0 11px;
}
.Shapes {
  background-color: #FFC200;
  border-radius: 8px;
  margin: 39.5px 0 0 30px;
}
.chapters {
  display: flex;
}
.Share {
  background: #EAEAEA;
  border-radius: 15px;
  border-radius: 15px;
  height: 30px;
  width: 67px;
}
.Share p {
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  margin: 9px 0 0 15px;
}
.Chat {
  display: flex;
  background: #FFF8DD;
  border-radius: 15px;
  border-radius: 15px;
  height: 30px;
  width: 81px;
  font-family: Helvetica;
  font-size: 14px;
  color: #FFC200;
  margin: 0 0 0 15px;
}
.Chat img {
  margin: 6px 0 0 12px;
}
.Chat div {
  margin: 9px 0 0 5px;
}
.Chat:before {
  content: url("../assets/Combined Shape@1x.svg");
  margin: 7px 0 0 10px;
}
.users {
  display: flex;
  margin: 44px 0 0 0;
}
.users img {
  border-radius: 100%;
  margin: 0 5px 0 0;
}
.buttons {
  display: flex;
  margin: 45px 0 0 15px;
}
.n_button {
  text-decoration: none;
  color: #131313;
  opacity: 0.7;
  margin: 23px 0 14px 30px;
  position: relative;
}
.title h1 {
  font-family: Helvetica;
  font-size: 32px;
  color: #131313;
  line-height: 43px;
  margin: 35px 0 0 15px;
}

.dotdotdot_title {
  display: flex;
  height: 30px;
  width: 30px;
  background-color: #EAEAEA;
  border-radius: 100%;
  margin: 45px 0 0 11px;
}
.dot_position {
  display: flex;
  margin: 13px 0 0 5px;
}
.space {
  display: flex;
  flex: 1 1 1px;
}
.n_button:active {
  text-decoration: none;
  color: #131313;
  opacity: 0.7;
}

.n_button:hover {
  color: #000000;
  opacity: 1;
}

.n_button:after {
  content: "";
  width: 100%;
  height: 3px;
  display: none;
  background-color: #FFC200;
  position: absolute;
  top: 31px;
  left: 0;
  z-index: 1;
}

.n_button:hover:after, .n_button.active:after {
  display: block;
}
.header {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 136px;
  background-color: #FFFFFF;
}
</style>