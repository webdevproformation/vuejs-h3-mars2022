<template>
  <h1>Todos List</h1>
  <Form @add="addTodo" />
  <List :datas="liste"  />
</template>
<script>
import Form from "./components/Form.vue"
import List from "./components/List.vue"
import { ref } from "vue"
export default {
  setup(){
    let liste = ref([{id : 1 , nom : "tache1" , status : false}])

    function addTodo(todo){
      liste.value.push(todo)
    }

    return {
      liste,
      addTodo
    }
  },
  components : {Form, List}
  // 15h25 bon café @ toute suite !!!
}
</script>
