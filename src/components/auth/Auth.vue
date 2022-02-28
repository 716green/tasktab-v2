<template>
  <div>
    <form class="w-full" @submit="authenticate">
      <input type="text" v-model="email" />
      <input type="text" v-model="password" />
      <input v-if="signup" type="text" v-model="confirmPassword" />
      <button @click="authenticate">
        {{ signup ? "Signup" : "Login" }}
      </button>
      <hr />
      <section class="text-red-500 font-semibold" v-if="!!errorMessage">
        {{ errorMessage }}
      </section>
      <button @click="signup = !signup">
        {{ signup ? "Login" : "Signup" }}
      </button>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "@/services/firebase";
import { mapActions } from "vuex";
export default {
  name: "Auth",
  data() {
    return {
      auth: null,
      signup: false,
      email: null,
      password: null,
      confirmPassword: null,
      errorCode: null,
      errorMessage: null,
      firebaseUser: null,
    };
  },
  async mounted() {
    await this.initAuth();
  },
  methods: {
    ...mapActions({
      signIn: "signIn",
    }),
    async initAuth() {
      this.auth = getAuth(firebaseApp);
    },
    createUser() {
      createUserWithEmailAndPassword(
        this.auth,
        this.formattedEmail,
        this.password
      )
        .then((userCredential) => {
          this.firebaseUser = userCredential;
          const user = userCredential.user;
          const email = user.email;
          this.signIn(userCredential, email);
        })
        .catch((err) => {
          this.errorCode = err.code;
          this.errorMessage = err.message;
        });
    },
    fetchUser() {
      signInWithEmailAndPassword(this.auth, this.formattedEmail, this.password)
        .then((userCredential) => {
          this.firebaseUser = userCredential;
          const user = userCredential.user;
          const email = user.email;
          this.signIn(userCredential, email);
        })
        .catch((err) => {
          this.errorCode = err.code;
          this.errorMessage = err.message;
        });
      //
    },
    authenticate(e) {
      e.preventDefault();

      if (this.signup) {
        // todo - sign up
        this.createUser();
        const payload = {
          firebaseUser: "???????",
        };
        this.signIn(payload);
      } else {
        // todo - login
        this.fetchUser();
        const payload = {
          firebaseUser: "???????",
        };
        this.signIn(payload);
      }
    },
  },
  computed: {
    formattedEmail() {
      return this.email?.split(" ")?.join("")?.toLowerCase()?.trim();
    },
  },
};
</script>

<style scoped></style>
