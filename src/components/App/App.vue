<style module lang="scss">
  @import './App.scss';
</style>

<template>
  <div :class="$style.app">
    <HelloWorld msg="Welcome to my first Vue.js App"/>

    <div>
      <form @submit.prevent="handleSubmit">
        <input
          type='text' :class="$style.input"
          v-model="input" placeholder="Type your new todo"
        />
      </form>
      <span v-if="loading">Loading...</span>
      <span v-if="!loading && filteredTodos.length === 0">
        There's no todo added so far!
      </span>

      <div v-if="!loading && filteredTodos.length > 0">
        <FiltersContainer
          :total="filteredTodos.length"
          :filterBy="filterBy" :filterTodo="filterTodo"
        />
        <List
          :filteredTodos="filteredTodos" :deleteTodo="deleteTodo"
          :toggleTodo="toggleTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import HelloWorld from '../HelloWorld';
  import FiltersContainer from '../FiltersContainer';
  import List from '../List';

  import { getTodos, deleteTodo, toggleTodo, filterTodo, handleSubmit } from './App.actions'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      FiltersContainer,
      List
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
