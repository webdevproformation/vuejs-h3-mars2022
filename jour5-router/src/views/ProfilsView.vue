<template>
    <ul v-for="(p , index) in profils" :key="index">
        <li>{{ p.name }} 
            <RouterLink :to="{name : 'single-profil' , params : {id : p.id}}">voir 
                &rarr;</RouterLink>
        </li>
    </ul>
</template>

<script>
import { onMounted , ref } from "vue"
export default {
    setup(){
        const profils = ref([])
        onMounted(() => {
             fetch("https://jsonplaceholder.typicode.com/users")
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data)
                profils.value = data
            })
        })
        return {
            profils
        }
    }
}
</script>

<style>

</style>