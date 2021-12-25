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
    ul(class="Open" @click="Redirect")
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
    Redirect () {
      if (this.open>0) {
        this.$router.push('tasks');
      }
    },
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
.aside {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 270px;
  background-color: #000000;
}
.Proj {
  height: 84px;
  width: 270px;
  display: flex;
}
.Proj div h2 {
  font-family: Helvetica;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  margin: 30px 0 0 13px;
}
.avaka {
  height: 80px;
  width: 270px;
  display: flex;
  background: #202020;
}
.avaka ul {
  margin: 20px 0 0 13px;
}
.name {
  font-family: Helvetica;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
}
.status {
  font-family: Helvetica;
  font-size: 12px;
  color: #9B9B9B;
  margin: 2px 0 0 0;
  line-height: 17px;
}
.dotdotdot_avka {
  display: flex;
  margin: 38px 0 0 49px;
  height: 4px;
  width: 25px;
}
.dot {
  height: 4px;
  width: 4px;
  border-radius: 100%;
  background: #8C8C8CD8;
  margin: 0 4px 0 0;
}
.compl_task {
  display: flex;
  cursor: pointer;
}

.compl_task ul {
  margin: 20px 0 0 30px;
}
.number {
  font-family: Helvetica;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;
}
.Tasks {
  opacity: 0.5;
  font-family: Helvetica;
  font-size: 12px;
  color: #FFFFFF;
  line-height: 17px;
  margin: 4px 0 0 0;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 31px 0 0 30px;
}

.menu h2 {
  font-family: Helvetica;
  font-size: 12px;
  color: #878787;
  line-height: 18px;
}
.menu li {
  font-family: Helvetica;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
  margin: 18.6px 0 0 0;
}

.Notif {
  position: absolute;
  font-family: Helvetica;
  font-size: 13px;
  color: #131313;
  background-color: #FFC200;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  margin: 115px 0 0 87px;
}

.Notif p {
  margin: 4px 0 0px 6px;
}
.logo {
  margin: 27px 0 0 30.4px;
}
.Avatar {
  border-radius: 100%;
  margin: 16px 0 0 30px;
}
.Proj div {
  display: flex;
  margin: 0 20px 0 0;
  justify-content: space-between;
  width: 100%;
}

</style>