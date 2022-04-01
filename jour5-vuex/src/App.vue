<template>
  <p>{{ nb }}</p>
  <button @click="augmenter">Augmenter</button>
  <Test />
</template>

<script>
import  Test  from "./components/Test.vue";
import { useCounterStore } from "./stores/counter.js";

export default {
  components : { Test },
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