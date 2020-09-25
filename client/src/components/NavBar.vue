<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link 
    to="/"
    class="navbar-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/9GAG_new_logo.svg" alt="">
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    <router-link 
    to="/hot"
    class="navbar-item">
      Hot
    </router-link>
    <router-link 
    to="/trending"
    class="navbar-item">
      Trending
    </router-link>
    <router-link 
    to="/fresh"
    class="navbar-item">
      Fresh
    </router-link>
  </div>
</nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style lang="scss" scoped>

</style>