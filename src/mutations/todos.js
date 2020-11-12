import { v4 as uuid } from 'uuid';
import storage from '../helpers/storage';

export function setFilter(state, payload) {
  state.filterBy = payload;
}

export function getTodos(state) {
  state.todos = storage.get('todos') || [];
}

export function deleteTodo(state, product) {
  if (confirm('Do you want to delete this todo?')) {
    state.todos = state.todos.filter(t => t.id !== product.id);
  }
}

export function handleSubmit(state, name) {
  state.todos.unshift({
    id: uuid(),
    name,
    edit: false,
    checked: false
  });
}
