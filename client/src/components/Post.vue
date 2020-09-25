<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{title}}</p>
      </header>
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src=imageUrl alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          {{content}}
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Post",
    props:['title','imageUrl','content'],
    data: function () {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>