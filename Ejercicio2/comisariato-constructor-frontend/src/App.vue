<template>
  <router-view />
  <GlobalSnackbar />
</template>

<script>
import GlobalSnackbar from "@/components/snackbar.vue";
export default {
  components: { GlobalSnackbar },
};
</script>
