<template>
  <div>
    <main>
      <div class="row" style="overflow: hidden">
        <div class="col pl-0 pr-0">
          <img
            src="../assets/paisaje.png"
            class="img-fluid"
            style="position: absolute"
          />
          <div class="row">
            <div class="col introductionText">
              <div class="pb-5">
                <p>
                  <span>
                    Reservas de
                    <br />
                    ecoturismo
                  </span>
                </p>
                <p class="text-justify ml-4">
                  Conoce lugares ecologicos, <br />
                  reserva viajes, gana premios <br />
                  e interactua con otros viajeros.
                </p>
                <div class="row">
                  <div class="col" style="text-align: right">
                    <router-link
                      to="/home"
                      class="btn btn-primary"
                      role="button"
                    >
                      Reservar
                    </router-link>
                  </div>
                  <div class="col" style="text-align: left">
                    <a
                      class="btn btn-outline-light"
                      href="#introduction"
                      role="button"
                    >
                      Conocenos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row interestSection ml-4 pt-5" id="introduction">
        <div class="col">
          <p><span>Nuestro interés.</span></p>
          <p>
            Se busca mostrar una mayor gamma de opciones turísticas en Colombia,
            saliendo de lo convencional y haciendo énfasis en el ecoturismo,
            ofreciendo las mejores opciones de viaje
          </p>
          <a class="btn btn-primary" href="#" role="button"> Lugares </a>
        </div>
        <div class="col">
          <img src="../assets/guy-walking.jpg" class="img-fluid" />
        </div>
      </div>
      <div class="row objetiveSection mt-5 p-5">
        <div class="col-sm-12" style="text-align: center">
          <p>
            <span>Objetivo</span> <br />
            Desarrollar un aplicativo web que promueva el turismo <br />
            ecológico en Colombia, mostrando alternativas turísticas diferentes
            <br />
            a las convencionales.
          </p>
        </div>
        <div class="col-sm-12" style="text-align: center">
          <img src="../assets/cano-cristal.jpg" class="img-fluid" />
        </div>
      </div>
    </main>
    <footer class="footerSection d-flex justify-content-center pt-2">
      <div class="row" style="width: 50%">
        <div class="col">
          <p><span>Equipo de desarrollo</span> <br /></p>
          <p>
            Juan José García,<br />
            Enmanuel Domínguez y <br />
            Aaron Tadeo Cubillos
          </p>
        </div>
        <div class="col">
          <p><span>Servicios</span> <br /></p>
          <p>
            <a href="#">Inicio</a> <br />
            <a href="#">Reseñas</a> <br />
            <a href="#">Lugares</a> <br />
            <a href="#">Reservar</a> <br />
            <a href="#">Perfil</a>
          </p>
        </div>
        <div class="col">
          <p><span>EcoTrips</span> <br /></p>
          <p>
            El mejor sitio de ecoturismo en Colombia
            <input type="text" name="" id="" />
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

.introductionText {
  text-align: center;
  align-items: center;
  display: flex;
  padding-left: 8vw;
  height: 52vw;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.8vw;
}

.introductionText span {
  font-size: 5vw;
  line-height: 1em;
  text-shadow: 3.5px 3.5px 6px #000000;
}

.interestSection {
  color: black;
  font-family: "Roboto", sans-serif;
  font-size: 1.25vw;
}

.interestSection span {
  color: #2f2c43;
  font-size: 5vw;
}

.objetiveSection {
  background-color: rgb(0, 190, 201);
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.25vw;
}

.objetiveSection span {
  text-align: center;
  font-size: 5vw;
}

.footerSection {
  background-color: #313131;
  width: 100%;
  color: white;
}

.footerSection p {
  font-size: 0.75vw;
  margin-bottom: 0.75vw;
}

.footerSection p span {
  font-weight: bold;
}

.btn {
  padding: 0.5vw 1vw;
  font-size: 1.25vw;
  line-height: 1.5;
  border-radius: 0.3vw;
}
</style>
