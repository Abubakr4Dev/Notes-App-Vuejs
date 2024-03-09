<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar></NavBar>
    <RouterView></RouterView>
  </header>
</template>

<style>
* {
  font-family: Helvetica;
}

body {
  text-align: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

h1 {
  font-family: "Indie Flower", cursive;
}

/* The Blue Button */

.action-button {
  background-color: #008cba;
  border: 2px solid #008cba;
  color: white;
  padding: 7px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  margin: 4px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.action-button:hover {
  background-color: white;
  color: black;
}
</style>
