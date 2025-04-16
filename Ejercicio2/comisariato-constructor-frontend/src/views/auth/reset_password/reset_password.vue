<template>
  <container-auth title="Restablecimiento de Contraseña">
    <template v-slot:body>
      <div class="mt-12">
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
        <v-text-field
          variant="underlined"
          v-model="form.submit.password_confirmation"
          label="Confirmacion de contraseña"
          :error-count="form.error.password ? form.error.password.length : 0"
          :error-messages="form.error.password"
          :append-inner-icon="
            app.password_confirmation_visible ? 'mdi-eye-off' : 'mdi-eye'
          "
          @click:append-inner="
            app.password_confirmation_visible =
              !app.password_confirmation_visible
          "
          :type="app.password_confirmation_visible ? 'text' : 'password'"
        ></v-text-field>
        <v-btn
          elevation="8"
          type="submit"
          color="blue "
          text="Restablecer Contraseña"
          class="px-10 mt-4"
          @click="resetPassword()"
        ></v-btn>
      </div>
    </template>
  </container-auth>
</template>

<script src="./reset_password.js"></script>
<style src="./reset_password.css"></style>
