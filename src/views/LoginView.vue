<script setup lang="ts"></script>

<template>
  <form class="form" method="post" name="login">
    <h1 class="login-title">Login</h1>
    <input
      type="text"
      class="login-input"
      name="username"
      placeholder="Username"
      autofocus="true"
    />
    <input
      type="password"
      class="login-input"
      name="password"
      placeholder="Password"
    />
    <input type="submit" value="Login" name="submit" class="login-button" />
    <p class="link">
      Need an account? Register now!
      <RouterLink to="/register">Register</RouterLink>
    </p>
  </form>
</template>

<style scoped></style>
