<!-- GlobalSnackbar.vue -->
<template>
  <v-snackbar
    class="d-flex text-center"
    v-model="visible"
    :color="color"
    :timeout="timeout"
  >
    <span class="ma-auto text-center">
      {{ message }}
    </span>
  </v-snackbar>
</template>

<script>
import { ref } from "vue";

const visible = ref(false);
const message = ref("");
const color = ref("success");
const timeout = ref(3000);

export function showSnackbar(newMessage, newColor = "success") {
  message.value = newMessage;
  color.value = newColor;
  visible.value = true;
}

export default {
  name: "GlobalSnackbar",
  setup() {
    return { visible, message, color, timeout };
  },
};
</script>

<style scoped></style>
