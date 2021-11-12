<template lang="pug">
router-view
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent(
  {
    name: 'App',
    components:{},

  }
)
</script>
<style lang="scss">
html {
  min-height: 100vh;
  min-width: 100vh;
  overflow: hidden;
}

body {
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}

#app {
  min-width: 100vh;
  min-height: 100vh;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
}


*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}


nav,
footer,
header,
aside {
  display: block;
}


html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}


input,
button,
textarea {
  font-family: inherit;
}


input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

html {
  height: 100%;
  width: 100%;
}

.general {
  display: flex;
  min-height: 100vh;
  min-width: 100vh;
  background-color: #EAEAEA;
}

.aside {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 270px;
  background-color: #000000;
}

.gside {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 136px;
  background-color: #FFFFFF;
}

.content_zone {
  display: flex;
  min-width: 100%;
  min-height: 100%;

}

.content_box {
  display: flex;
  flex-direction: column;
  height: 591px;
  flex: 0 1 730px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 20px auto;
}

@media screen and (max-width: 790px) {
  .content_box {
    height: 100%;
    margin: 10px;
  }

}

.Proj {
  height: 84px;
  width: 270px;
  display: flex;
}

.logo {
  margin: 27px 0 0 30.4px;
}

.Proj div h2 {
  font-family: Helvetica;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 24px;
  margin: 30px 0 0 13px;
}

.search {
  margin: 34px 0 0 60px;
}

.avaka {
  height: 80px;
  width: 270px;
  display: flex;
  background: #202020;
}

.Avatar {
  border-radius: 100%;
  margin: 16px 0 0 30px;
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

.title {
  display: flex;
  height: 100%;
}

.Shapes {
  background-color: #FFC200;
  border-radius: 8px;
  margin: 39.5px 0 0 30px;
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

.chapters {
  display: flex;
}

.nav {
  display: flex;
  font-family: Helvetica;
  font-size: 16px;
  height: 56px;
  width: 100%;
}

.n_button {
  text-decoration: none;
  color: #131313;
  opacity: 0.7;
  margin: 23px 0 14px 30px;
  position: relative;
}

.active {
  opacity: 1;
  color: #000000;
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


.content_zone {
  display: flex;
  justify-content: center;
  align-items: center;
}

.Proj div {
  display: flex;
  margin: 0 20px 0 0;
  justify-content: space-between;
  width: 100%;
}

.Proj div:after {
  padding: 33px 0 0 0;
  content: url("../src/assets/Search@3x.svg")
}

.Chat:before {
  margin: 6px 0 0 12px;
  content: url("../src/assets/Combined Shape@1x.svg")
}

.icon_bg:after {
  margin: 13px 0 0 14px;
  content: url("../src/assets/Icon@3x.svg")
}
</style>
