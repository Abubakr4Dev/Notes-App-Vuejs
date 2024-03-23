<script setup lang="ts">
import type { IRegisterInput } from "@/api/types";
import router from "@/router";
import { useStore } from "@/stores";
// import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStore();

const email = ref<string>();
const password = ref<string>();

function onSubmit() {
  const userData: IRegisterInput = {
    email: email.value!,
    password: password.value!,
  };
  
  store
    .registerUser(userData)
    .then(() => {
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

// const { rules } = storeToRefs(store);
</script>

<template>
  <div class="form">
    <h1 class="login-title">Registration</h1>
    <input
      type="text"
      class="login-input"
      name="email"
      placeholder="Username"
      required
      v-model="email"
    />
    <input
      type="password"
      class="login-input"
      name="password"
      placeholder="Password"
      required
      v-model="password"
    />
    <input
      @click="onSubmit()"
      type="submit"
      name="submit"
      value="Register"
      class="login-button"
    />
    <p class="link">
      Have an account? Login now! <RouterLink to="/login">Login</RouterLink>
    </p>
  </div>
</template>
