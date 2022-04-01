<template>
    <section>
        <h2>Liste des tâches</h2>
        <ul>
            <li v-for="(tache , index) in datas" :class="{realise : tache.status}" @click.self="terminee(tache)">
                <button @click.stop="supprimer(index , tache.id)">supprimer tâche</button>
                {{ tache.nom }}
            </li>
        </ul>
    </section>
</template>
<script>

export default {
    setup(props, context ){
        function terminee(tache){
            
            const cloneTache = {...tache}
            cloneTache.status = !cloneTache.status
            fetch(`http://localhost:3004/todos/${tache.id}`, {
                method: "put",
                body : JSON.stringify(cloneTache),
                headers : {"content-type": "application/json"} ,
            }).then(reponse => reponse.json())
            .then(data => context.emit("update" , data))
        }
        function supprimer (index , id){
            context.emit("suppr" , index , id)
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

-----------------

cas pratique => persister les données dans une base 

1 json-server => installer json server 
2 créer le fichier db.json 
3 créer un script qui permet de démarrer le serveur table 
todos []
4 au moment où app App est initialisé => requête fetch vers cette base remplir la variable liste

-->