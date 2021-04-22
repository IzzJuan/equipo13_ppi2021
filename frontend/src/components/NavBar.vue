<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-lg">
      <router-link to="/" class="navbar-brand mb-0 h1">
        <img src="../assets/img/EcoTrips_logo/BackgroundEcoTrips_logo_V2.png" class="img-fluid" width="45px"
             height="auto" alt="Ecotrips logo">
        <img src="../assets/img/EcoTrips_logo/TextoLogo2.png" class="img-fluid mb-2" width="100px" height="auto"
             alt="Ecotrips logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item d-flex">
            <router-link to="/about">
            <a class="nav-link" href="/about">Inicio</a>
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
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
div nav {
  background-color: rgb(0, 190, 201);
}

form input, button {
  font-size: 1.5rem !important;
}
</style>