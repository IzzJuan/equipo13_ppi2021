<template lang="">
  <div class="auth">
    <Login v-if="login" />
    <Signin v-if="signin" />
  </div>
</template>
<script>
import Login from "@/components/LoginForm";
import Signin from "@/components/SigninForm";

export default {
  components: {
    Login,
    Signin,
  },
  data() {
    return {
      login: false,
      signin: false,
    };
  },
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
