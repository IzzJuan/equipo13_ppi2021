<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style>
@import "./App.css";
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
};
</script>