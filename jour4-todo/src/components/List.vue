<template>
    <section>
        <h2>Liste des tâches</h2>
        <ul>
            <li v-for="(tache , index) in datas" :class="{realise : tache.status}" @click.self="terminee(tache)">
                <button @click.stop="supprimer(index)">supprimer tâche</button>
                {{ tache.nom }}
            </li>
        </ul>
    </section>
</template>
<script>

export default {
    setup(props, context ){
        function terminee(tache){
            tache.status = !tache.status
        }
        function supprimer (index){
            context.emit("suppr" , index)
        }
        return {
            terminee,
            supprimer
        }
    },
    props : ["datas"]
}
</script>
<style scoped>
    .realise{
        text-decoration-line: line-through;
    }
</style>
<!-- 
cas pratique : 
ajouter dans chaque <li> button qui permet de supprimer définitivement la tâche de la liste de tâche 
-->