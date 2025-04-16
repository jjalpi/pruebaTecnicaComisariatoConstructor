import axios from "@/axios";
import { showSnackbar } from "@/components/snackbar.vue";
export default {
  name: "login",

  watch: {
    "form.submit": {
      handler: function (object) {
        for (const property in object) {
          if (!this.form.submit[property] == "") {
            this.form.error[property] = "";
          }
        }
      },
      deep: true,
    },
  },

  data() {
    return {
      app: {
        password_visible: false,
      },
      form: {
        submit: {},
        error: {},
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("/login", this.form.submit);
        showSnackbar(response.data.message, "success");
        localStorage.setItem("token", response.data.token);
        this.goToHome();
      } catch (error) {
        this.form.error = {};
        if (error.response) {
          if (error.response.status == 422) {
            const object = error.response.data.errors;
            for (const property in object) {
              this.form.error[property] = object[property];
            }
          }
          if (error.response.status == 401) {
            showSnackbar(error.response.data.message, "error");
          }
        } else {
          console.error(error.message);
        }
      }
    },
    goToRegister() {
      this.$router.push({ name: "register" });
    },
    forgotPassword() {
      this.$router.push({ name: "forgot_password" });
    },
    goToHome() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
