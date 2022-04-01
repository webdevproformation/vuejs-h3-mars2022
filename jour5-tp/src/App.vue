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

<!--
 dans le projet en cours jour5-tp
 créer un nouveau composant reactive => Exo

  créer formation  => []
  créer matiere  => { nom : "" , duree : ""  }
  utiliser l'API composition pour remplir ce tableau 
  dans vue vous avez un formulaire avec deux champs 
  input de type => nom 
  input de number => duree => 
  input de type submit
  <ul>
    <li>nom -  duree</li>
  </ul>
  une fois que vous avez cliquer sur le bouton de soumission
  ajouter une nouvelle valeur dans la variable réactive 
  formation
  afficher la liste des matières créées dans une liste 

-->