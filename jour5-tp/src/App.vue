<template>
  <h1>start jour5</h1>
  <p @click="modifState">{{ state }}</p>
  <p @click="modifNb">{{ nb }}</p>
</template>

<script>
import { useNb } from "./hook/useNb";
import { useState } from "./hook/useState";
export default {
  setup(){
    const [nb,modifNb] = useNb(5); // fonction composite qui retourne une ou plusieurs variables reactive (ref) et une fonction qui permet de la modifier 

    const [state , modifState ] = useState(); 
    return {
      state,
      modifState,
      nb,
      modifNb
    }
  }
}
</script>