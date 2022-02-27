<template>
  <div>
    <h2>Tasks</h2>
    <input type="text" v-model="newTask" />
    <button @click="addTask">Add</button>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "@/components/tasks/TaskList.vue";
export default {
  name: "Tasks",
  data() {
    return {
      newTask: null,
      tasks: [],
    };
  },
  components: {
    TaskList,
  },
};
</script>

<style scoped></style>
