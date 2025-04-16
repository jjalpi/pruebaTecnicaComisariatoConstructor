import axios from "@/axios";
import { showSnackbar } from "@/components/snackbar.vue";

export default {
  name: "forgot_password",

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
        submit: {
          email: "",
        },
        error: {},
      },
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },

    async sendResetLink() {
      try {
        const response = await axios.post("/forgot_password", this.form.submit);
        showSnackbar(response.data.message, "success");
      } catch (error) {
        this.form.error = {};
        if (error.response) {
          if (error.response.status == 422) {
            const object = error.response.data.errors;
            for (const property in object) {
              this.form.error[property] = object[property];
            }
          }
          if (error.response.status == 400) {
            showSnackbar(error.response.data.message, "error");
          }
        } else {
          console.error(error.message);
        }
      }
    },
  },
};
