<template>
    <p>je suis le formulaire</p>
    <button @click="ajouter">ajouter une nouvelle tâche </button>
</template>
<script>
export default {
    setup(props, context){
        function ajouter(){
            context.emit('add', {id : 2 , nom : "tache 2" , status : false})
        }
        return {
            ajouter
        }
    }
}
</script>
<!--
cas pratique 
dans le composant Form => dans la partie template 
créer un formulaire avec input de type texte + input de type submit
créer un variable réactive qui permet de récupérer la valeur saisit dans le champ text
créer une méthode qui va être déclenchée lorsque l'on soumet le formulaire
en utilisant la nouvelle API  
-->