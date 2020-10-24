<template>
  <div class="app">
    <Header msg="Welcome to my first Vue.js App"/>

    <div>
      <form @submit.prevent="handleSubmit(input);input='';">
        <input
          type='text' class="input"
          v-model="input" placeholder="Type your new todo"
        />
      </form>
      <span v-if="loading">Loading...</span>
      <span v-if="!loading && todos.length === 0">
        There's no todo added so far!
      </span>

      <transition
        name="fade"
        enter-class="fade_enter"
        leave-to-class="fade_enter"
        enter-active-class="fade_active"
        leave-active-class="fade_active"
      >
        <div>
          <div v-if="!loading && todos.length > 0">
            <FiltersContainer />
          </div>
          <div v-if="!loading && todos.length > 0 && filteredTodos.length === 0">
            <span>There's no todos for the filters applied</span>
          </div>
          <div v-if="!loading && filteredTodos.length > 0">
            <List />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import Header from '../Header';
  import FiltersContainer from '../FiltersContainer';
  import List from '../List';
  import storage from '../../helpers/storage';
  import { todos, filteredTodos } from '../../computed/todos';

  export default {
    name: 'App',
    components: {
      Header,
      FiltersContainer,
      List
    },
    data: () => ({
      loading: true,
      input: ''
    }),
    created() {
      this.getTodos();

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    methods: mapMutations([
      'getTodos',
      'handleSubmit',
    ]),
    computed: {
      todos,
      filteredTodos
    },
    watch: {
      todos: {
        deep: true,
        handler: function(newTodos) {
          storage.save('todos', newTodos);
        }
      }
    }
  }
</script>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .image {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }

  .input {
    padding: 16px;
    width: calc(100% - 32px);
    margin: 0;
    border: 1px solid #f1f1f1;
    margin-bottom: 16px;
    border-bottom: 2px solid grey;
    outline: none;
    font-size: 14px;
  }

  .fade_active {
    transition: opacity 500ms;
  }
  .fade_enter {
    opacity: 0;
  }
</style>