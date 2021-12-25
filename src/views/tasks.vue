<template lang="pug">
div(class="content_box")
  div(class="task")
    form.FormTs(onsubmit="return false" novalidate="true")
      input(class="Name" v-model="NewTs.name" placeholder="Name" id="name" name="name")
      textarea(cols="30" rows="3" v-model="NewTs.description" placeholder="Description" id="description" name="description")
      div(class="Tabs")
        input(required type="radio" name="status" value="todo" checked v-model="NewTs.status")/
        p ToDo
        input(required type="radio" name="status" value="inprogress" v-model="NewTs.status")/
        p In progress
        input(required type="radio" name="status" value="done" v-model="NewTs.status")/
        p Done
      button(class="AddTs" type="submit" @click="AddTsk")
        | Add
  transition-group(name="list")
    div(class="txt" v-for="(el,i) in tasksArry" :key="el")
      span {{el.name}} # {{i+1}}
      button(class="buttondelete" @click="Tsminus(i)")
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
          description: "new tasks",
          status: "",
        },
        {
          name: "Txt",
          description: "new tasks",
          status: "",
        },
        {
          name: "Txt",
          description: "new tasks",
          status: "",
        },
        {
          name: "Txt",
          description: "new tasks",
          status: "",
        }
      ],
      NewTs: [
        {
          name: "",
          description: "",
          status: "",
        }
      ],
      errors: []
    };
  },
  methods: {
    AddTsk () {
      this.tasksArry.unshift(this.NewTs)
      this.NewTs= [
        {
          name: "",
          description: "",
          status: "",
        }
      ]
    },
    Tsminus (i:number) {
      this.tasksArry.splice(i, 1)
    }
  }
});
</script>

<style scoped>
.content_box {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 20px auto;
  flex: 0 1 730px;
  height: auto;
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
  background-color: #42b983;
  min-height: 30px;
  border-radius: 8px;
}
.txt span {
  margin: 5px 0 0 5px;
}
.FormTs {
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-size: 14px;
}

.Name {
  min-width: 90%;
  max-height: 40px;
  background-color: #42b983;
  margin-top: 15px;
  border-radius: 8px;
}

.FormTs textarea {
  background-color: #FFC200;
  margin-top: 15px;
  border-radius: 8px;
}

.FormTs button {
  background-color: #42b983;
  width: 60px;
  height: 40px;
  margin-top: 15px;
  border-radius: 8px;
}

.buttondelete {
  background-color: #c90100;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  border-radius: 8px;
  margin: 5px 5px 0 0;
}
.AddTs {
  background-color: #42b983;
  height: 40px;
  margin-top: 15px;
  width: 80px;
  border-radius: 8px;
}
.list-enter-to {
  transition: all 3s;
  opacity: 1;
  transform: scale(1.2);
  border: #FFC200;
}
.list-leave-to {
  transition: all 3s;
  opacity: 0;
  transform: scale(1.2);
}
</style>