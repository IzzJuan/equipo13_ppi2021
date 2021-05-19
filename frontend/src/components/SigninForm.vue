<template lang="">
  <div class="row">
    <form>
      <div class="form-inner col">
        <h2>Signup</h2>
        <div class="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            v-model="user.userFirstName"
          />
        </div>
        <div class="form-group">
          <label htmlFor="name">Apellido:</label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            v-model="user.userLastName"
          />
        </div>
        <div class="form-group">
          <label htmlFor="name">Documento de Identidad:</label>
          <input type="text" name="idUser" id="idUser" v-model="user.userID" />
        </div>
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
        <input type="submit" value="Signup" @click.prevent="submit" />
        <input type="button" value="Go to Login" />
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
      user: {
        userFirstName: "",
        userLastName: "",
        userID: "",
        userEmail: "",
        userPassword: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:8081/signin", this.user)
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
