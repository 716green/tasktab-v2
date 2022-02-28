import { createApp } from "vue";
import { firebaseApp } from "@/services/firebase";
import App from "@/App.vue";
import "@/index.css";
import { store } from "@/store";

let app = null;
try {
  if (!!firebaseApp) {
    app = createApp(App);
    app.use(store);
    app.mount("#app");
  }
} catch (err) {
  console.error(err);
}
