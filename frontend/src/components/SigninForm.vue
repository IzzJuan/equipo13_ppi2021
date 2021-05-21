<template lang="">
  <div class="row row-cols-1">
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
            id="emailSignin"
            v-model="user.userEmail"
          />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="passwordSignin"
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
      axios.post("http://localhost:8081/signin", this.user).then((res) => {
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
