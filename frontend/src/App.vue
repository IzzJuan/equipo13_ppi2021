<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url("assets/css/app.css");
</style>
