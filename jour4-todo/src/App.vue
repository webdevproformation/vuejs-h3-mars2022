<template>
  <h1>Todos List</h1>
  <Form @add="addTodo" />
  <List :datas="liste" @suppr="deleteTodo" />
</template>
<script>
import Form from "./components/Form.vue"
import List from "./components/List.vue"
import { ref } from "vue"
export default {
  setup(){
    let liste = ref([{id : 1 , nom : "tache1" , status : true}])

    function addTodo(todo){
      liste.value.push(todo)
    }
    function deleteTodo(index){
      liste.value.splice(index, 1)
    }

    return {
      liste,
      addTodo,
      deleteTodo
    }
  },
  components : {Form, List}
  // 15h25 bon café @ toute suite !!!
}
</script>
