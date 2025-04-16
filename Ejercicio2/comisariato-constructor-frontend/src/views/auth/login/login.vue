<template>
  <container-auth title="Iniciar Sesión">
    <template v-slot:body>
      <div class="mt-4 mb-7">
        <v-text-field
          v-model="form.submit.email"
          variant="underlined"
          label="Email"
          :error-count="form.error.email ? form.error.email.length : 0"
          :error-messages="form.error.email"
        ></v-text-field>
        <v-text-field
          variant="underlined"
          v-model="form.submit.password"
          label="Contraseña"
          :error-count="form.error.password ? form.error.password.length : 0"
          :error-messages="form.error.password"
          :append-inner-icon="app.password_visible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="app.password_visible = !app.password_visible"
          :type="app.password_visible ? 'text' : 'password'"
        ></v-text-field>
        <v-btn
          elevation="8"
          type="submit"
          color="blue "
          text="Ingresar"
          class="px-10 mt-7"
          @click="login()"
        ></v-btn>
      </div>
      <div class="d-flex flex-column align-center justify-center">
        <span
          class="ma-2 text-decoration-underline text-blue pointer"
          @click="forgotPassword()"
          >¿Olvidaste tu contraseña?</span
        >
        <span
          class="ma-2 text-decoration-underline text-blue pointer"
          @click="goToRegister()"
          >¿No tienes una cuenta? Registrate</span
        >
      </div>
    </template>
  </container-auth>
</template>

<script src="./login.js"></script>
<style scoped src="./login.css"></style>
