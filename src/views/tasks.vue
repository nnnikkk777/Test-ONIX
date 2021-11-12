<template lang="pug">
div(class="content_box")
  div(class="task")
    h2
    | My task
  div(class="txt" v-for="(el,i) in tasksArry" :key="i")
    | {{el.name}} # {{i+1}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task_interface } from "../types/Task_interface";

export default defineComponent ({
  name: "tasks",
  data (): Record<string, any> {
    return {
      tasksArry: [
        {
          name: "Txt"
        },
        {
          name: "Txt"
        },
        {
          name: "Txt"
        },
        {
          name: "Txt"
        }
      ] as Task_interface[]
    }
  }
});
</script>

<style scoped>
.content_box {
  display: flex;
  flex-direction: column;
  height: 591px;
  flex: 0 1 730px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 20px auto;
  align-items: center;
}
.task {
  display: flex;
  font-family: Helvetica;
  font-size: 18px;
  margin: 30px 0 0 0;
  opacity: 0.6;
}
.txt {
  display: flex;
  margin: 30px;
  font-family: Helvetica;
  font-size: 14px;
}
</style>