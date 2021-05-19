<template lang="">
  <div class="row">
    <form>
      <div class="form-inner col">
        <h2>Signup</h2>
        <div class="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div class="form-group">
          <label htmlFor="name">Apellido:</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
        <div class="form-group">
          <label htmlFor="name">Documento de Identidad:</label>
          <input type="text" name="idUser" id="idUser" />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Signup" />
        <input type="button" value="Go to Login" />
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import "./Styles/AuthForms.css";
</style>
