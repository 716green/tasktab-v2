<template>
  <div>
    <Layout v-if="isAuthenticated" />
    <Auth v-else />
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Auth from "./components/auth/Auth.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters({
      isAuthenticated: "getIsAuthenticated",
    }),
  },
  components: {
    Layout,
    Auth,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
* {
  @apply bg-slate-800 text-white;
  font-family: "Ubuntu Mono", monospace;
}
input {
  @apply rounded-md border-none w-full;
}
button {
  @apply rounded-md border-2 border-blue-500 p-8 m-8 w-24;
  margin: 1.2rem;
}
</style>
