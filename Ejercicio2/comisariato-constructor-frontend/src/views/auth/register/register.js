import axios from "@/axios";
import { showSnackbar } from "@/components/snackbar.vue";

export default {
  name: "register",

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
          name: "",
          email: "",
          password: "",
        },
        error: {},
      },
    };
  },
  methods: {
    async register() {
      this.form.error = {};
      try {
        const response = await axios.post("/register", this.form.submit);
        showSnackbar(response.data.message, "success");
        this.goToLogin();
      } catch (error) {
        this.form.error = {};
        if (error.response) {
          if (error.response.status == 422) {
            const object = error.response.data.errors;
            for (const property in object) {
              this.form.error[property] = object[property];
            }
          }
        } else {
          console.error(error.message);
        }
      }
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
