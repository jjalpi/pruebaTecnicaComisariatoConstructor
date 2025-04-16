import axios from "@/axios";
import { showSnackbar } from "@/components/snackbar.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "reset_password",

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
        password_confirmation_visible: false,
      },
      form: {
        submit: {
          token: "",
          email: "",
          password: "",
          password_confirmation: "",
        },
        error: {},
      },
    };
  },

  methods: {
    async resetPassword() {
      try {
        const url = window.location.href;
        const token = url.substring(url.lastIndexOf("/") + 1);
        this.form.submit.token = token;

        const response = await axios.post("/reset_password", this.form.submit);
        showSnackbar(response.data.message, "success");
        this.$router.push({ name: "login" });
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
