<template lang="pug">
.content_box
  .table(class="table")
    .todo(class="td")
      h1 Todo
    .inprogress(class="inp")
      h1 In progress
    .done(class="done")
      h1 Done
</template>

<script lang="ts">
export default {
  name: "kanban"
};
</script>

<style scoped>
.content_box {
  display: flex;
  min-width: 100%;
  justify-content: center;
}
.table {
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: space-around;
  font-family: Helvetica;
  min-height: 100%;
}
.td {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid #42b983;
  min-height: 100%;
  align-items: center;
}
.inp {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid #42b983;
  min-height: 100%;
  align-items: center;
}
.done {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border: 1px solid #42b983;
  min-height: 100%;
  align-items: center;
}
h1 {
  margin: 10px 0 0 0;
  font-size: 16px;
}
</style>