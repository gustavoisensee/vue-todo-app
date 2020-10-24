<style module lang="scss">
  @import './App.scss';
</style>

<template>
  <div :class="$style.app">
    <Header msg="Welcome to my first Vue.js App"/>

    <div>
      <form @submit.prevent="handleSubmit(input);input='';">
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
