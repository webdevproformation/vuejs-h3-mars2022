<template>
  <p>{{ store.counter }}</p>
  <p>{{ cardStore.card }}</p>
  <button @click="augmenter">Augmenter</button>
  <button @click="ajouter">ajouter Produit</button>
  <Test />
</template>

<script>
import  Test  from "./components/Test.vue";
import { useCounterStore } from "./stores/counter.js";
import { useCardStore } from "./stores/card.js";

export default {

  components : { Test },
  setup(){
    const store = useCounterStore()
    const cardStore = useCardStore()
    function augmenter (){
      store.increment()
    }
    function ajouter (){
      cardStore.add({id : 1 , nom : "article APP"})
    }
    return {
      store ,
      cardStore ,
      augmenter,
      ajouter
    }
  }
}
</script>

<style>

</style>