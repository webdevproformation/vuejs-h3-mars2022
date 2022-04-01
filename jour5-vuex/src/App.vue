<template>
  <p>{{ store.counter }}</p>
  <button @click="augmenter">Augmenter</button>
  <Test />
</template>

<script>
import  Test  from "./components/Test.vue";
import { useCounterStore } from "./stores/counter.js";

export default {

  components : { Test },
  setup(){
    const store = useCounterStore()
    function augmenter (){
      store.increment()
    }
    return {
      store ,
      augmenter
    }
  }
}
</script>

<style>

</style>