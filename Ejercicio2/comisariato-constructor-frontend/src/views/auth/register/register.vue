<template>
  <container-auth title="Registrarse">
    <template v-slot:body>
      <div>
        <div class="mt-4 mb-7">
          <v-text-field
            v-model="form.submit.name"
            variant="underlined"
            label="Nombre"
            :error-count="form.error.name ? form.error.name.length : 0"
            :error-messages="form.error.name"
          ></v-text-field>
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
            :append-inner-icon="
              app.password_visible ? 'mdi-eye-off' : 'mdi-eye'
            "
            @click:append-inner="app.password_visible = !app.password_visible"
            :type="app.password_visible ? 'text' : 'password'"
          ></v-text-field>
          <v-btn
            elevation="8"
            type="submit"
            color="blue "
            text="Registrarse"
            class="px-10 mt-4"
            @click="register()"
          ></v-btn>
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <span
            class="text-decoration-underline text-blue pointer"
            @click="goToLogin()"
            >¿Tienes una cuenta? Inicia Sesión</span
          >
        </div>
      </div>
    </template>
  </container-auth>
</template>

<script src="./register.js"></script>
<style src="./register.css"></style>
