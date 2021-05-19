<template lang="">
  <div class="row">
    <form>
      <div class="form-inner col">
        <h2>Login</h2>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="user.userEmail"
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="user.userPassword"
          />
        </div>
        <input type="submit" value="Login" @click.prevent="submit" />
        <input type="button" value="Go to Signup" />
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router/index";
export default {
  data() {
    return {
      user: { userEmail: "", userPassword: "" },
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:8081/login", this.user)
        .then((res) =>
          res.data.valid ? router.push("/") : alert(res.data.msg)
        );
    },
  },
};
</script>

<style scoped>
@import "./Styles/AuthForms.css";
</style>
