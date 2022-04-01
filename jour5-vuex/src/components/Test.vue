<template>
    <p>{{ store.counter }}</p>
</template>

<script>

import { useCounterStore } from "../stores/counter.js"

export default {
    setup() {
        const store = useCounterStore()
        return {
            store
        }
    }
}
</script>
