<template>
    <article>
        <h2>{{ infos.nom  }}</h2>
        <p>age : {{ infos.age  }}</p>
        <p>adresse : {{ infos.adresse }}</p>
        <button @click="toggle">toggle liste dans le parent</button>
    </article>
</template>
<script>
export default {
    props : {
        infos : Object
    },
    methods : {
        toggle : function(){
            this.$emit("toggle")
        }
    }
}
</script>
