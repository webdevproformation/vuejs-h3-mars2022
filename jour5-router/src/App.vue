<template>
<div class="wrapper">
  <header>
      <nav class="text-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>
  <RouterView />
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
  nav a {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }

  .router-link-active{
    background: #9b4dca;
    color: white !important;
  }
  .text-center{
    display: flex;
    justify-content: center;
  }
</style>