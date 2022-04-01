<template>
  <h1>start jour5</h1>
  <p @click="modifState">{{ state }}</p>
  <p @click="modifNb">{{ nb }}</p>
  <p @click="modifDataNom">{{ nom }} - {{ age }}</p>
</template>

<script>
import { useNb } from "./hook/useNb";
import { useState } from "./hook/useState";
import { toRefs , reactive} from "vue"
export default {
  setup(){
    const [nb,modifNb] = useNb(5); // fonction composite qui retourne une ou plusieurs variables reactive (ref) et une fonction qui permet de la modifier 

    const data = reactive({ nom : "Alain" , age : 22 })
    const dataRefs = toRefs(data)

    function modifDataNom(){
      data.nom = "Pierre"
    }

    const [ state , modifState ] = useState(); 

    return {
      state,
      modifState,
      nb,
      modifNb,
      modifDataNom ,
      ...dataRefs
    }
  }
}
</script>