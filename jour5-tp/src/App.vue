<template>
  <h1>start jour5</h1>
  <p @click="modifState">{{ state }}</p>
  <p @click="modifNb">{{ nb }}</p>
</template>

<script>
import { reactive , ref } from "vue"
import { useNb } from "./hook/useNb"
export default {
  setup(){

    const [nb,modifNb] = useNb()

    const state = reactive({
      isLodding : false ,
      data : [],
      error : ""
    })
    function modifState(){
      state.data.push("nouvel élément")
    }

    return {
      state,
      modifState,
      nb,
      modifNb
    }

  }
}
</script>

<style>

</style>