<template>
  <h1>Todos List</h1>
  <Form @add="addTodo" />
  <List :datas="liste" @suppr="deleteTodo" @update="updateTodo"/>
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
    
    function updateTodo(todo){
      const todoAUpdate = liste.value.find(tod => tod.id === todo.id)
      const index = liste.value.indexOf(todoAUpdate)
      liste.value[index] = todo

      /*
      solution alternative 
      fetch("http://localhost:3004/todos")
      .then(reponse => reponse.json())
      .then(data => {
        console.log(data);
        liste.value = data ; 
      })
      */
    }

    function deleteTodo(index , id){
      fetch(`http://localhost:3004/todos/${id}`, {method : "delete"})
      .then(reponse => reponse.json())
      .then(data =>{
        console.log(data)
        liste.value.splice(index, 1)
      })
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
      deleteTodo,
      updateTodo
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
  // 
}
</script>
<!--
finir le crud 
supprimer => le supprimer dans la base de données
update du status => dans la base de données 

=> Composable 
=> VueX 
=> Router VueJS !!  
-->