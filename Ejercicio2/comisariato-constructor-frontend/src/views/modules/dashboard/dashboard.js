import axios from "@/axios";
import { showSnackbar } from "@/components/snackbar.vue";
export default {
  name: "dashboard",
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "/logout",
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );

        localStorage.removeItem("token");
        showSnackbar(response.data.message, "success");
        this.$router.push("login");
      } catch (error) {
        console.log(error);
        if (error.message != "Network Error") {
          showSnackbar(error.response.data.message, "error");
        }
        showSnackbar("No es posible cerrar sesión. Error de Conexión", "red");
      }
    },
  },
};
