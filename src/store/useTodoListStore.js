import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [],
    id: 0,
  }),
  // actions
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false ,edit:false});
    },
    deleteTodo(item) {
        this.todoList = this.todoList.filter((object) => {
          return object.id !== item.id; // Corrected comparison
        });
    },
    updateTodo(item){
this.todoList[item.id] = item
    }
  },
});
