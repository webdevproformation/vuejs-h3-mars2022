<template>
  <h1>Todos List</h1>
  <Form @add="addTodo" />
  <List :datas="liste" @suppr="deleteTodo" />
</template>
<script>
import Form from "./components/Form.vue"
import List from "./components/List.vue"
import { ref , onMounted  } from "vue"
export default {
  setup(){
    let liste = ref([])

    function addTodo(todo){
      liste.value.push(todo)
    }
    function deleteTodo(index){
      liste.value.splice(index, 1)
    }

   onMounted(() => {
      fetch("http://localhost:3004/todos")
      .then(reponse => reponse.json())
      .then(data => {
        console.log(data);
        liste.value = data ; 
      })
    })

    return {
      liste,
      addTodo,
      deleteTodo
    }
  },
  components : {Form, List},
  /* mounted : function(){
    fetch("http://localhost:3004/todos")
      .then(reponse => reponse.json())
      .then(data => {
        this.liste = data ; 
      })
  } */
  // 15h25 bon café @ toute suite !!!
}
</script>
