<template lang="">
  <div class="auth">
    <!-- <Login /> -->
    <Signin />
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
};
</script>
<style scoped>
.auth {
  height: 100vh;
  background-color: rgb(0, 190, 201);
}
</style>
