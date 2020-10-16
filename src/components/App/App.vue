<style module lang="scss">
  @import './App.scss';
</style>

<template>
  <div :class="$style.app">
    <HelloWorld msg="Welcome to my first Vue.js App"/>

    <div>
      <form @submit.prevent="handleSubmit">
        <input type='text' :class="$style.input" v-model="input" placeholder="Type your new todo" />
      </form>
      <span v-if="loading">Loading...</span>
      <span v-if="!loading && filteredTodos.length === 0">There's no todo added so far!</span>

      <div v-if="!loading && filteredTodos.length > 0">
        <div :class="$style.filter_container">
          <div>
            <button :class="[filterBy === 'all' && $style.filter_active, $style.filter]" @click="filterTodo('all')">All</button>
            <button :class="[filterBy === 'active' && $style.filter_active, $style.filter]" @click="filterTodo('active')">Active</button>
            <button :class="[filterBy === 'completed' && $style.filter_active, $style.filter]" @click="filterTodo('completed')">Completed</button>
          </div>
          <span>{{filteredTodos.length}} items</span>
        </div>
        <ul>
          <li v-for="todo in filteredTodos" :key="todo.text" :class="$style.list_item">
            <div :class="$style.checkbox_container">
              <input type="checkbox" :id="todo.id" v-model="todo.checked" @click="toggleTodo(todo)">
              <label :for="todo.id" :class="[todo.checked && $style.completed]">{{ todo.name }}</label>
            </div>
            <button @click="deleteTodo(todo)" :class="$style.delete_button" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '../HelloWorld';
  import { getTodos, deleteTodo, toggleTodo, filterTodo, handleSubmit } from './App.actions'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data: () => ({
      loading: true,
      input: '',
      todos: [],
      filteredTodos: [],
      filterBy: 'all'
    }),
    created() {
      this.getTodos();
    },
    methods: {
      getTodos,
      deleteTodo,
      toggleTodo,
      filterTodo,
      handleSubmit
    }
  }
</script>
