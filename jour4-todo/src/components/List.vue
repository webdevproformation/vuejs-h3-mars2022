<template>
    <section>
        <h2>Liste des tâches</h2>
        <ul>
            <li v-for="tache in datas" :class="{realise : tache.status}" @click="terminee(tache)">
                {{ tache.nom }}
            </li>
        </ul>
    </section>
</template>
<script>

export default {
    setup( ){
        function terminee(tache){
            tache.status = !tache.status
        }
        return {
            terminee
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