<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <router-link to="/" class="navbar-brand mb-0 h1">
      <img
        src="../assets/img/EcoTrips_logo/BackgroundEcoTrips_logo_V2.png"
        class="img-fluid"
        width="45px"
        height="auto"
        alt="Ecotrips logo"
      />
      <img
        src="../assets/img/EcoTrips_logo/TextoNegro.png"
        class="img-fluid"
        width="100px"
        height="auto"
        alt="Ecotrips logo"
      />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" style="color: black">&#9776;</span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarTogglerDemo02"
    >
      <ul class="navbar-nav">
        <li class="nav-item d-flex">
          <router-link to="/about" class="nav-link">
            &#8962; Inicio
          </router-link>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link" href="#">&#9998; Reseñas</a>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link" href="#">&#128366; Reservar</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-link {
  color: black !important;
}

form input,
button {
  font-size: 1.5rem !important;
}
</style>
