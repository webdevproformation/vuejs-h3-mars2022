<template>
    <p>{{ store.counter }}</p>
    <button @click="diminuer">diminuer</button>
</template>

<script>

import { useCounterStore } from "../stores/counter.js"

export default {
    setup() {
        const store = useCounterStore()
        function diminuer (){
            store.diminuer();
        }
        return {
            store,
            diminuer
        }
    }
}
</script>
