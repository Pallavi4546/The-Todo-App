<template>
<div v-for="(item,i) in todoList" :key="i" class="card">
    <div v-if="!item.edit" class="list">
      <div class="items"> {{ item.item }} </div> 
      <div> <button @click="deleteTodo(item)" class="todoButtonDelete">Delete</button>
    <button @click="editTodo(item)" class="todoButtonConfirm" >Edit</button></div>
    </div>
    <div v-if="item.edit" class="list">
        <div><input v-model="item.item" class="todoInput"></div>
        <div>
        <button @click="updateTodo(item)" class="todoButtonConfirm">Confirm</button>
        <button @click="cancelTodoEdit(item)" class="todoButtonDelete">Cancel</button>
        </div>
       
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
let tempvalEdit = ref("")
const store = useTodoListStore()
 // storeToRefs lets todoList keep reactivity:
 const { todoList } = storeToRefs(store);
 function editTodo(item){
    item.edit = true;
    tempvalEdit = item.item
 }
 function updateTodo(item){
    item.edit= false
    store.updateTodo(item)
 }
 function cancelTodoEdit(item){
    item.edit = false
    item.item = tempvalEdit
    store.updateTodo(item)
 }
 function deleteTodo(item){
    store.deleteTodo(item)
 }
</script>
<style scoped>
.card{
    margin: auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.items{
    display: flex;
    flex-wrap: wrap;
   align-items: center;
   margin-left: 20px ;
}
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
  height: auto;
  padding: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.todoInput {
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

 .todoButtonConfirm {
  padding: 8px;
  background-color: rgb(24, 169, 236);
  border: none;
  border-radius: 5px;
  color: #fff;
  margin: 5px;
  cursor: pointer;
}
.todoButtonDelete {
    padding: 8px;
  background-color: rgb(193, 44, 74);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin: 5px;
}
</style>