<template>
  <form class="form" action="" method="post">
    <h1 class="login-title">Registration</h1>
    <input
      type="text"
      class="login-input"
      name="username"
      placeholder="Username"
      required
    />
    <input
      type="text"
      class="login-input"
      name="email"
      placeholder="Email Adress"
    />
    <input
      type="password"
      class="login-input"
      name="password"
      placeholder="Password"
    />
    <input type="submit" name="submit" value="Register" class="login-button" />
    <p class="link">
      Have an account? Login now! <RouterLink to="/login">Login</RouterLink>
    </p>
  </form>
</template>

<style scoped></style>
