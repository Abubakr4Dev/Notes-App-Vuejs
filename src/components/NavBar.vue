<script setup lang="ts">
import router from "@/router";
import { useStore } from "@/stores";
import { storeToRefs } from "pinia";

const store = useStore();

const { token } = storeToRefs(store);

function logout() {
  store.logoutUser().then(() => {
    router.push("/login");
  });
}
</script>

<template>
  <!-- Top menu -->
  <div class="navigation-bar">
    <div class="navigation-container">
      <img src="../assets/images/note.png" />
      <h1>Notes</h1>
    </div>
    <button v-if="token" class="logout action-button" @click="logout()">
      Logout
    </button>
  </div>
</template>

<style>
.navigation-bar {
  background-color: rgb(51, 51, 51);
  height: 80px;
  width: 100%;
  margin-bottom: 20px;
  color: whitesmoke;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.navigation-container {
  width: 0%;
  float: left;
  margin-left: 30px;
}

.navigation-bar img {
  float: left;
  padding: 10px;
  height: 60px;
}

.logout {
  width: 5%;
}

.action-button {
  background-color: #008cba;
  border: 2px solid #008cba;
  width: 100px;
  height: 50px;
  align-self: center;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5%;
}

.action-button:hover {
  background-color: white;
  color: black;
}
</style>
