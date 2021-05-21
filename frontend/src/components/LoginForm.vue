<template lang="">
  <div class="row">
    <form>
      <div class="form-inner col-md-auto">
        <h2>Login</h2>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="emailLogin"
            v-model="user.userEmail"
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="passwordLogin"
            v-model="user.userPassword"
          />
        </div>
        <div class="row">
          <div class="col botonIzq">
            <input type="submit" value="Login" @click.prevent="submit" />
          </div>
          <div class="col botonDer">
            <input type="button" value="Signup" @click="changeVisibility" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router/index";
export default {
  props: {
    method: { type: Function },
  },
  data() {
    return {
      user: { userEmail: "", userPassword: "" },
    };
  },
  methods: {
    submit() {
      axios.post("http://localhost:8081/login", this.user).then((res) => {
        if (res.data.valid) {
          localStorage.setItem("userEmail", this.user.userEmail);
          router.push("/");
        } else {
          alert(res.data.msg);
        }
      });
    },
    changeVisibility() {
      this.method();
    },
  },
};
</script>

<style scoped>
@import "./Styles/AuthForms.css";
</style>
