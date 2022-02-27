<template>
  <ul>
    <li v-for="(item, i) in tasks" :key="i">
      {{ item.task }}
    </li>
  </ul>
</template>

<script>
import { db } from "@/services/firebase";
import { getDoc, doc } from "firebase/firestore";

export default {
  name: "TaskList",
  data() {
    return {
      tasks: [],
      userEmail: "bob@bbass.co",
      hiddenStatuses: ["archived", "hidden"],
    };
  },
  async mounted() {
    const docRef = doc(db, "users/" + this.userEmail);
    const userDoc = await getDoc(docRef);
    const tasks = userDoc.data().tasks;

    tasks.forEach((task) => {
      if (!this.hiddenStatuses?.includes(task.status)) this.tasks.push(task);
    });
  },
};
</script>

<style scoped></style>
