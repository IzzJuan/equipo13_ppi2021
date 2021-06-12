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
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarTogglerDemo02"
    >
      <ul class="navbar-nav">
        <li class="nav-item d-flex">
          <router-link to="/about" class="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home-2"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <rect x="10" y="12" width="4" height="4" />
            </svg>
            Inicio
          </router-link>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link" href="#">Reseñas</a>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link" href="#">Lugares</a>
        </li>
        <li class="nav-item d-flex">
          <a class="nav-link" href="#">Reservar</a>
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
