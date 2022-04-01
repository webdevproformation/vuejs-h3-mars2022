<template>
  <div class="wrapper">
      <header>
          <nav class="text-center">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{name : 'about'}">About</RouterLink>
            <RouterLink :to="{name : 'articles'}">Articles</RouterLink>
            <RouterLink :to="{name : 'login'}">Connexion</RouterLink>
          </nav>
      </header>
      <RouterView />
      <hr>
      <footer class="text-center">
         <RouterLink :to="{name : 'about'}">About</RouterLink>
      </footer>
    </div>
</template>

<script>
export default {

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
</style>