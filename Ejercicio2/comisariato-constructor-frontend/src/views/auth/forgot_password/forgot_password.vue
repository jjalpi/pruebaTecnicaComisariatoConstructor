<template>
  <container-auth title="Enviar Enlace ">
    <template v-slot:body>
      <div class="mt-4 mb-7">
        <v-text-field
          v-model="form.submit.email"
          variant="underlined"
          label="Email"
          :error-count="form.error.email ? form.error.email.length : 0"
          :error-messages="form.error.email"
        ></v-text-field>

        <v-btn
          elevation="8"
          type="submit"
          color="blue "
          text="Enviar Enlace "
          class="px-10 mt-4"
          @click="sendResetLink()"
        ></v-btn>
      </div>
      <div class="d-flex flex-column align-center justify-center">
        <span
          class="ma-2 text-decoration-underline text-blue pointer"
          @click="goToLogin()"
          >Iniciar Sesión</span
        >
      </div>
    </template>
  </container-auth>
</template>

<script src="./forgot_password.js"></script>
<style src="./forgot_password.css"></style>
