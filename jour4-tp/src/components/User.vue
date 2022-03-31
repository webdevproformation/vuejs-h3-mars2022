<template>
    <article>
        <h2>{{ infos.nom  }}</h2>
        <p>age : {{ infos.age  }}</p>
        <p>adresse : {{ infos.adresse }}</p>
    </article>
</template>
<script>
export default {
    props : {
        infos : Object
    }
}
</script>