<template>
  <div>
    <AsideNavbar @method="changeOpacity" />
    <div v-if="opacity" class="blinder"></div>
    <div class="container">
      <NavBar />
      <div class="position-absolute">
        <img src="../assets/colombia.jpg" alt="" srcset="" class="mainImage" />
      </div>
      <div class="row">
        <div class="col mainSearcher">
          <form class="my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="¿Adónde?"
              aria-label="Search"
            />
          </form>
        </div>
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
@import "./Styles/mediaQueriesHome.css";

.blinder {
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
}

.mainSearcher {
  margin: 14.8% 20%;
}
</style>
