<template lang="">
  <div>
    <form>
      <div class="form-inner">
        <h2>Signup</h2>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <input type="submit" value="Signup" />
        <input
          type="button"
          onClick="{()"
          value="Go to
        Login"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
