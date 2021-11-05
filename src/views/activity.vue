<template lang="pug">
div(class="content_box")
  div(class="date")
    h2
      | Today
  div(:class="'content'+ (index+1)" v-for='(el, index) in content' :key='index')
    .icon_bg
    div(:class='el.class')
    p.text {{el.text}}
    p.time {{el.time}}
    .comment(v-if='el.comment')
      p {{el.comment}}
    .images(v-if='el.images')
      img(v-for='(img, i) in el.images' :key='i' :src='img' alt='image')
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'activity',
  components: {},
  data (): Record<string, any> {
    return {
      content: [
        {
          text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
          time: '8:40 PM',
          comment: '',
          images: ''
        },
        {
          text: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
          time: '7:32 PM',
          comment: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
          images: ''
        },
        {
          text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
          time: '6:02 PM',
          comment: '',
          images: ['https://i.pinimg.com/originals/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.png',
            'https://i.pinimg.com/originals/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.png',
            'https://i.pinimg.com/originals/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.png',
            'https://i.pinimg.com/originals/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.png']
        }
      ]
    }
  }
})
</script>

<style scoped>
.content_box img {
  height: 100px;
  width: 100px;
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
.date {
  opacity: 0.5;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-transform: uppercase;
  margin: 4% 0 0 2.1%;
}

.content1 .icon_bg {
  display: flex;
  background-color: #CEF9C6;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.content2 .icon_bg {
  display: flex;
  background-color: #FFF8DD;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.content3 .icon_bg {
  display: flex;
  background-color: #E3EFFF;
  height: 40px;
  width: 40px;
  border-radius: 100%;
}

.content1 {
  display: flex;
  margin: 30px 0 0 30px;
  flex-wrap: wrap;
}

.content2 {
  display: flex;
  margin: 30px 0 0 30px;
  flex-wrap: wrap;
}

.content3 {
  display: flex;
  margin: 30px 0 0 30px;
  flex-wrap: wrap;
}

.content1 img {
  margin: 15px 0 0 14px;
}

.content2 img {
  margin: 15px 0 0 14px;
}

.content3 img {
  margin: 15px 0 0 14px;
}

.text {
  font-family: Helvetica;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-left: 20px;
  max-width: 461px;
}

.time {
  opacity: 0.7;
  font-family: Helvetica;
  font-size: 14px;
  color: #131313;
  text-align: right;
  line-height: 20px;
  margin-left: 96px;
}

.comment {
  max-width: 551px;
  max-height: 88px;
  background: #F7F6F3;
  border-radius: 10px;
  margin: 60px 0 0 61px;
}

.comment p {
  font-family: Helvetica;
  font-size: 15px;
  color: #131313;
  margin: 20px 0 20px 30px;
}

.images img {
  border-radius: 8px;
}
</style>