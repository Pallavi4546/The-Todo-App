<template>
  <form @submit.prevent="addItemAndClear(listItem)" style="margin: 20px;" >
 <input type="text" v-model="listItem" placeholder="Add todo" class="todoInput" />
 <button class="todoButton">Add Todo</button>
  </form>
    </template>
    <script setup>
    import { ref } from 'vue';
    import { useTodoListStore } from '@/store/useTodoListStore'
    const store = useTodoListStore()
    const listItem = ref('')
    function addItemAndClear(item){
        if (item.length === 0) {
    return
  }
  // invokes function in the store:
  store.addTodo(item)
  listItem.value = ''
    }
    </script>
    <style scoped>
  * {
  text-align: center;
}

.todoInput {
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.todoButton {
  padding: 8px;
  background-color: rgb(24, 169, 236);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
    </style>