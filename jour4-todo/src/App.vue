<template>
  <h1>Todos List</h1>
  <Form />
  <List :datas="liste"  />
</template>
<script>
import Form from "./components/Form.vue"
import List from "./components/List.vue"
import {ref } from "vue"
export default {
  setup(){
    let liste = ref([{id : 1 , nom : "tache1" , status : false}])

    return {
      liste
    }
  },
  components : {Form, List}
}
</script>
