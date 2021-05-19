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
.row {
  align-items: center;
  justify-content: center;
  margin: 0;
}

input,
button {
  appearance: none;
  background: none;
  border: none;
  outline: none;
}

form {
  display: block;
  position: relative;
}

form:after {
  content: "";
  display: block;
  position: absolute;
  top: -5px;
  left: -5x;
  right: -5px;
  bottom: -5px;
  z-index: 1;
  background-image: linear-gradient(to bottom right, #ffce00, #fe4880);
}

form .form-inner {
  position: relative;
  display: block;
  background-color: #161a2b;
  padding: 30px;
  z-index: 2;
  border-radius: 25px;
}

form .form-inner h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
}

form .form-inner .form-group {
  display: block;
  width: 300px;
  margin-bottom: 15px;
}

.form-inner .form-group label {
  display: block;
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
  transition: 0.4s;
}

.form-inner .form-group:focus-within label {
  color: #fe4880;
}

form .form-inner .form-group input {
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  transition: 0.4s;
}

form .form-inner .form-group input:focus {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
}

form .form-inner input[type="submit"] {
  display: inline;
  padding: 10px 15px;
  border-radius: 8px;
  background-image: linear-gradient(to right, #e73c7e 25%, #ee7752);
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

form .form-inner input[type="submit"]:hover {
  background-position: 100% 0%;
}

form .form-inner input[type="button"] {
  display: inline;
  padding: 10px 15px;
  border-radius: 8px;
  background-image: linear-gradient(to left, #e73c7e 25%, #ee7752);
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  margin-left: 32%;
}

form .form-inner input[type="button"]:hover {
  background-position: 100% 0%;
}
</style>
