<template>
    <div>
        <h1>Article tout seul numéro {{ $route.params.id }} </h1>
    <ul>
        <li> 
            composant router : {{numero}}
        </li>
        <li>comme props depuis le composant router : {{ id }}</li>
    </ul>
    <p>{{ article }}</p>
    <button class="button" @click="onClickGoHome">retour à l'accueil</button>
    </div>
</template>

<script>
import { useRoute , useRouter } from "vue-router"
import {onMounted , ref } from "vue"
export default {
    props : [ "id" ],
    // Option API
    /* data (){
        return {
            numero : this.$route.params.id // récupérer dans le js
        }
    } */
    // Composition API
    setup(){
        const route = useRoute()
        const numero = route.params.id
        const article = ref({})
        const router = useRouter()
        onMounted( () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${numero}`)
            .then(reponse => reponse.json())
            .then(data => {
                article.value = data
            })
        })
        function onClickGoHome(){
            // Option API
            // this.$router.push("/")
            router.push("/") // navigation programmatique 
        }
        return {
           numero ,
           article ,
           onClickGoHome         
        }
    }
}
</script>

<style>

</style>