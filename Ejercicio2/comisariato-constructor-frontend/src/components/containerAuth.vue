<template>
  <v-app>
    <v-main class="d-flex align-center background-image">
      <v-container
        class="text-center my-4 rounded-xl ma-auto responsive-container"
        elevation="10"
        style="background-color: #fff"
      >
        <div class="d-flex flex-xs-nowrap justify-center align-center mb-2">
          <v-img
            src="@\assets\CDC-LOGO.svg"
            width="300px"
            height="170px"
            aspect-ratio="1/1"
            alt="Comisariato Constructor"
            class="d-flex justify-space-between"
          ></v-img>
        </div>
        <span class="text-h6 font-weight-bold text-green-darken-4">{{
          title
        }}</span>
        <v-divider class="mt-2"></v-divider>

        <slot name="body"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "containerAuth",
  props: {
    title: {
      required: true,
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.background-image {
  background-image: url("@/assets/57246-construccion.jpg");
  background-size: cover;
  background-position: center center;
}
.responsive-container {
  max-width: 500px;
}

@media (max-width: 600px) {
  /* Ajusta el breakpoint según necesites */
  .responsive-container {
    max-width: 300px;
  }
}
</style>
