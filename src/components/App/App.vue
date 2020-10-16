<style module lang="scss">
  @import './App.scss';
</style>

<template>
  <div :class="$style.app">
    <Header msg="Welcome to my first Vue.js App"/>

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
          :filterBy="filterBy"
          :setFilterBy="setFilterBy"
        />
        <List
          :filteredTodos="filteredTodos"
          :deleteTodo="deleteTodo"
          :toggleTodo="toggleTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../Header';
  import FiltersContainer from '../FiltersContainer';
  import List from '../List';

  import { getTodos, deleteTodo, toggleTodo, filterTodos, handleSubmit } from './App.actions'

  export default {
    name: 'App',
    components: {
      Header,
      FiltersContainer,
      List
    },
    data: () => ({
      loading: true,
      input: '',
      todos: [],
      filterBy: 'all'
    }),
    created() {
      getTodos.call(this);
    },
    methods: {
      deleteTodo,
      toggleTodo,
      setFilterBy: function(filter) {
        this.filterBy = filter;
      },
      handleSubmit
    },
    computed: {
      filteredTodos: filterTodos
    }
  }
</script>
