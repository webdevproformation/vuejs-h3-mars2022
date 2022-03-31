<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="tache">
        <input type="submit">
    </form>
</template>
<script>
import { ref } from "vue"
export default {
    setup(props, context){
        let tache = ref("");

        function onSubmit(){
            const newtache = { nom : tache.value , status : false }
            fetch(
                    "http://localhost:3004/todos" , {
                            method: "post", 
                            headers : {"content-type": "application/json"} , 
                            body : JSON.stringify(newtache)
                        }
                )
                .then(reponse => reponse.json())
                .then(data => {
                    context.emit('add', data )
                    tache.value = ""; // vider le champ input text
                })
            
        }
        return {
            tache ,
            onSubmit
        }
    }
}
</script>
<!--
cas pratique final de la journée
lorsque vous soumettez votre tâche => lancer une insertion dans le fichier db.json 
fetch("http://localhost:3004/todos" , {method : "post" , data : data , encryptage ...})
-->
<!--
cas pratique 
dans le composant Form => dans la partie template 
créer un formulaire avec input de type texte + input de type submit
créer un variable réactive qui permet de récupérer la valeur saisit dans le champ text
créer une méthode qui va être déclenchée lorsque l'on soumet le formulaire
en utilisant la nouvelle API  
-->