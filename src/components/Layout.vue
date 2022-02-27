<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <Tasks />
  </div>
</template>

<script>
import Tasks from "@/components/tasks/Tasks.vue";
export default {
  name: "Layout",
  components: {
    Tasks,
  },
};
</script>

<style scoped></style>
