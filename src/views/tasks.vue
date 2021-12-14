<template lang="pug">
div(class="content_box")
  div(class="task")
    form.FormTs(onsubmit="return false" @submit="Submit" novalidate="true")
      input( v-model="NewTs.name" placeholder="Name" id="name" name="name")
      textarea(cols="30" rows="3" v-model="NewTs.description" placeholder="Description" id="description" name="description")
      button(@click="addTs")
        | ADD
      p(v-if="errors.length")
      b Пожалуйста исправьте указанные ошибки:
      ul
        li(v-for="error in errors") {{ error }}
  div(class="txt" v-for="(el,i) in tasksArry" :key="i")
    | {{el.name}} # {{i+1}}
    input(class="buttondelete" @click="Tsminus" type="submit" value="ADD")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task_interface } from "../types/Task_interface";

export default defineComponent({
  name: "tasks",
  data(): Record<string, any> {
    return {
      name: null,
      description: null,
      tasksArry: [
        {
          name: "Txt",
          description: "new tasks"
        },
        {
          name: "Txt",
          description: "new tasks"
        },
        {
          name: "Txt",
          description: "new tasks"
        },
        {
          name: "Txt",
          description: "new tasks"
        }
      ],
      NewTs: [
        {
          name: "",
          description: ""
        }
      ],
      errors: []
    };
  },
  methods: {
    Submit () {
      if (this.name && this.description) {
        return true;
      }
      this.errors = [];

      if (!this.name) {
        this.errors.push("");
      }
      if (!this.description) {
        this.errors.push("");
      }
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
  flex-direction: column;
  position: relative;
}

.txt {
  display: flex;
  margin: 30px;
  font-family: Helvetica;
  font-size: 14px;
  position: relative;
  min-width: 95%;
}

.FormTs {
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-size: 14px;
}

.FormTs input {
  min-width: 90%;
  max-height: 40px;
  background-color: #42b983;
  margin-top: 15px;
}

.FormTs textarea {
  background-color: #202020;
  margin-top: 15px;
}

.FormTs button {
  background-color: #42b983;
  width: 60px;
  height: 40px;
  margin-top: 15px;
}

.buttondelete {
  background-color: #c90100;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
}
</style>