<template>
  <p>{{ nb }}</p>
  <button @click="augmenter">Augmenter</button>
</template>

<script>
import { useCounterStore } from "./stores/counter.js"
export default {
  data(){
    return {
      nb : 0
    }
  },
  methods : {
    augmenter(){
      const store = useCounterStore()
      store.increment()
      this.nb = store.counter ;
    }
  }
}
</script>

<style>

</style>