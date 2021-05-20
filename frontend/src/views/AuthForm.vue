<template lang="">
  <div class="auth">
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
