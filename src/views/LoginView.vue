<script setup lang="ts">
import type { ILoginInput } from "@/api/types";
import router from "@/router";
import { useStore } from "@/stores";
// import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStore();

const email = ref<string>();
const password = ref<string>();

function onSubmit() {
  const userData: ILoginInput = {
    email: email.value!,
    password: password.value!,
  };

  store
    .loginUser(userData)
    .then(() => {
      store.fetchNotes();
      router.push("/notes");
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        alert(error.response.data.message);
        return;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of

        console.log("error without response");
        return;
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(`Error:  ${error.message}`);
        return;
      }
      // console.log(error.config);
    });
}
</script>

<template>
  <div class="form">
    <h1 class="login-title">Login</h1>
    <input
      type="text"
      class="login-input"
      name="email"
      placeholder="Username"
      autofocus="true"
      v-model="email"
    />
    <input
      type="password"
      class="login-input"
      name="password"
      placeholder="Password"
      v-model="password"
    />
    <input
      @click="onSubmit()"
      type="submit"
      value="Login"
      name="submit"
      class="login-button"
    />
    <p class="link">
      Need an account? Register now!
      <RouterLink to="/register">Register</RouterLink>
    </p>
  </div>
</template>

<style scoped></style>
