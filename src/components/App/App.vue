<style module lang="scss">
  @import './App.scss';
</style>

<template>
  <div :class="$style.app">
    <HelloWorld msg="Welcome to my first Vue.js App"/>

    <div>
      <form @submit.prevent="handleSubmit">
        <input type='text' :class="$style.input" v-model="input" placeholder="Type your todo ..." />
      </form>
      <span v-if="loading">Loading...</span>
      <span v-if="!loading && todos.length === 0">There's no todo added so far!</span>

      <ul v-if="!loading">
        <li v-for="todo in todos" :key="todo.text" :class="$style.list_item">
          <div :class="$style.checkbox_container">
            <input type="checkbox" :id="todo.id" v-model="todo.checked" @click="toggleTodo(todo)">
            <label :for="todo.id" :class="[todo.checked && $style.completed]">{{ todo.name }}</label>
          </div>
          <button @click="deleteTodo(todo)" :class="$style.delete_button">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '../HelloWorld';
  import { getTodos, deleteTodo, toggleTodo, handleSubmit } from './App.actions'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data: () => ({
      loading: true,
      input: '',
      todos: []
    }),
    created() {
      this.getTodos();
    },
    methods: {
      getTodos,
      deleteTodo,
      toggleTodo,
      handleSubmit
    }
  }
</script>
