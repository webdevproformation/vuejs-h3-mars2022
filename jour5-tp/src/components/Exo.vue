<template>
    <div>
        <h1>Formation</h1>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="nom">
            <input type="number" v-model="duree">
            <input type="submit">
        </form>
        <ul>
            <li v-for="(f, index) in formation " :key="index">{{f.nom}} - {{f.duree}}</li>
        </ul>
    </div>
</template>

<script>
import {useFormation} from "../hook/useFormation"
export default {
    setup(){
        const [
            formation ,
            matiereRefs,
            onSubmit
        ] = useFormation()

        return {
            onSubmit,
            ...matiereRefs,
            formation
        }
    }
}
</script>

<style>

</style>