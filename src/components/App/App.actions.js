import { v4 as uuid } from 'uuid';
import storage from '../../helpers/storage';

export function filterTodos() {
  if (this.filterBy === 'all') {
    return [...this.todos];
  } else if (this.filterBy === 'active') {
    return this.todos.filter(t => !t.checked);
  } else {
    return this.todos.filter(t => !!t.checked);
  }
}

export function getTodos() {
  this.todos = storage.get('todos') || [];

  setTimeout(() => {
    this.loading = false;
  }, 1000);
}

export function deleteTodo(product) {
  if (confirm('Do you want to delete this todo?')) {
    const todos = this.todos.filter(t => t.id !== product.id);
    this.todos = todos;
  }
}

export function handleSubmit() {
  this.todos.unshift({
    id: uuid(),
    name: this.input,
    edit: false
  });

  this.input = '';
}
