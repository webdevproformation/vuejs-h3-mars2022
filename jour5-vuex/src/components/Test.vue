<template>
    <p>{{ store.counter }}</p>
    <button @click="diminuer">diminuer</button>
    <button @click="ajouter">ajouter </button>
</template>

<script>

import { useCounterStore } from "../stores/counter.js"
import { useCardStore } from "../stores/card.js";

export default {
    setup() {
        const store = useCounterStore()
        const cardStore = useCardStore()
        function diminuer (){
            store.diminuer();
        }
        function ajouter (){
            cardStore.add({id : 1 , nom : "article Test"})
        }
        return {
            store,
            diminuer,
            ajouter
        }
    }
}
</script>
