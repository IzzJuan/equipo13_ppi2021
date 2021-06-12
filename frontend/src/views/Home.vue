<template>
  <div>
    <AsideNavbar @method="changeOpacity" />
    <div>
      <div v-if="opacity" class="test"></div>
      <div class="container">
        <NavBar />
      </div>
    </div>
  </div>
</template>
<script>
import AsideNavbar from "@/components/AsideNavbar";
import NavBar from "@/components/NavBar";
export default {
  name: "Introduction",
  components: { AsideNavbar, NavBar },
  data() {
    return {
      opacity: false,
    };
  },
  methods: {
    changeOpacity() {
      this.opacity = !this.opacity;
    },
  },
};
</script>
<style scoped>
.test {
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
}
</style>
