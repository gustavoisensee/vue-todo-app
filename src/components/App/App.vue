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
      <span v-if="!loading && todos.length === 0">
        There's no todo added so far!
      </span>

      <transition
        name="fade"
        :enter-class="$style.fade_enter"
        :leave-to-class="$style.fade_enter"
        :enter-active-class="$style.fade_active"
        :leave-active-class="$style.fade_active"
      >
        <div>
          <div v-if="todos.length > 0">
            <FiltersContainer
              :total="filteredTodos.length"
              :filterBy="filterBy"
              :setFilterBy="setFilterBy"
            />
          </div>
          <div v-if="!loading && todos.length > 0 && filteredTodos.length === 0">
            <span>There's no todos for the filters applied</span>
          </div>
          <div v-if="!loading && filteredTodos.length > 0">
            <List
              :filteredTodos="filteredTodos"
              :deleteTodo="deleteTodo"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from '../Header';
  import FiltersContainer from '../FiltersContainer';
  import List from '../List';
  import storage from '../../helpers/storage';

  import { getTodos, deleteTodo, filterTodos, handleSubmit } from './App.actions'

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
      setFilterBy: function(filter) {
        this.filterBy = filter;
      },
      handleSubmit
    },
    computed: {
      filteredTodos: filterTodos
    },
    watch: {
      todos: {
        deep: true,
        handler(val) {
          storage.save('todos', val);
        }
      }
    }
  }
</script>
