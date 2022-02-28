<template>
  <ul>
    <li v-for="(item, i) in tasks" :key="i">
      {{ item.task }}
    </li>
  </ul>
</template>

<script>
import { getTasks } from "@/services/firebase";
import { mapGetters } from "vuex";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [],
    };
  },
  async mounted() {
    this.tasks = await getTasks(this.userEmail);
  },
  computed: {
    ...mapGetters({
      userEmail: "getUserEmail",
    }),
  },
};
</script>

<style scoped></style>
