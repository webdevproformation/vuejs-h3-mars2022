<template>
  <div class="wrapper">
      <header>
          <nav class="text-center">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{name : 'about'}">About</RouterLink>
            <RouterLink :to="{name : 'articles'}">Articles</RouterLink>
            <RouterLink :to="{name : 'profils'}">Profils</RouterLink>
            <RouterLink :to="{name : 'login'}">Connexion</RouterLink>
          </nav>
          <nav class="text-center move" >
            <button @click="goPrev">précédent</button>
            <button @click="goNext">suivant</button>
          </nav>
      </header>
      <RouterView />
      <hr>
      <footer class="text-center">
         <RouterLink :to="{ name : 'about' }">About</RouterLink>
      </footer>
    </div>
</template>

<script>
export default {
  methods : {
    goPrev(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.go(1)
    },
  }
}
</script>
  
<style>
  .wrapper{
    width:100%;
    margin: 0 auto;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 0 20px;
  }
  nav a , footer a {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }

  .router-link-active{
    background: #9b4dca;
    color: white !important;
  }
  .text-center{
    display: flex !important;
    justify-content: center;
  }
  .move > *{
    margin: 0 10px;
  }

  .mt-4{
    margin-top: 2em;
  }
</style>