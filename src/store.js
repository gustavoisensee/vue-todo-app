import { createStore } from 'vuex';
import {
  getTodos,
  setFilter,
  handleSubmit,
  deleteTodo
} from './mutations/todos';

const store = createStore({
  state: {
    filterBy: 'all',
    todos: []
  },
  mutations: {
    getTodos,
    setFilter,
    handleSubmit,
    deleteTodo
  },
  actions: {},
  modules: {}
});

export default store;
