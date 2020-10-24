import Vue from 'vue';
import Vuex from 'vuex';
import {
  getTodos, setFilter, handleSubmit, deleteTodo
} from './mutations/todos';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    filterBy: 'all',
    todos: []
  },
  mutations: {
    getTodos,
    setFilter,
    handleSubmit,
    deleteTodo
  }
});

export default store;