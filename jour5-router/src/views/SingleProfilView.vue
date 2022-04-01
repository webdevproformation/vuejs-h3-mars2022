<template>
    <pre>{{ profil }}</pre>
    <button @click="goBack">revenir en arrière</button>
</template>

<script>
import { onMounted , ref } from "vue";
import { useRoute , useRouter } from "vue-router"
export default {
    setup(){
        const route = useRoute();
        const router = useRouter();
        const profil = ref({})
        function goBack (){
            router.go(-1)
        }
        onMounted(() => {
             fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log(data)
                profil.value = data
            })
        })
        return {
            profil,
            goBack
        }
    }
}
</script>

<style>

</style>