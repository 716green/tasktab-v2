import { createApp } from "vue";
import { firebaseApp } from "./services/firebase";
import App from "./App.vue";
import "./index.css";

let app = null;
try {
  if (!!firebaseApp) {
    app = createApp(App);
    app.mount("#app");
  }
} catch (err) {
  console.error(err);
}
