<template lang="">
  <div class="auth row">
    <img
      src="../assets/img/EcoTrips_logo/TextoLogo2.png"
      class="img-fluid mr-5 ml-5"
    />
    <Login v-show="login" :method="changeVisibility" />
    <Signin v-show="signin" :method="changeVisibility" />
  </div>
</template>
<script>
import Login from "@/components/LoginForm";
import Signin from "@/components/SigninForm";
import router from "@/router/index";
export default {
  beforeCreate() {
    if (localStorage.getItem("userEmail")) {
      router.push("/");
    }
  },
  components: {
    Login,
    Signin,
  },
  data() {
    return {
      login: true,
      signin: false,
    };
  },
  methods: {
    changeVisibility() {
      this.login = !this.login;
      this.signin = !this.signin;
    },
  },
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
