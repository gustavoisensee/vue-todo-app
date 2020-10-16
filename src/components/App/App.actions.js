import { v4 as uuid } from 'uuid';
import storage from '../../helpers/storage';

export function filterTodo(filter) {
  this.filterBy = filter;
  if (filter === 'all') {
    this.filteredTodos = [...this.todos];
  } else if (filter === 'active') {
    this.filteredTodos = this.todos.filter(t => !t.checked);
  } else {
    this.filteredTodos = this.todos.filter(t => !!t.checked);
  }
}

export function getTodos() {
  this.todos = storage.get('todos') || [];
  filterTodo.call(this, this.filterBy);

  setTimeout(() => {
    this.loading = false;
  }, 1000);
}

export function deleteTodo(product) {
  if (confirm('Do you want to delete this todo?')) {
    const todos = this.todos.filter(t => t.id !== product.id);
    this.todos = todos;
    filterTodo.call(this, this.filterBy);
    storage.save('todos', todos);
  }
}

export function toggleTodo() {
  setTimeout(() => {
    storage.save('todos', this.todos);
  }, 500);
}

export function handleSubmit() {
  const newProduct = {
    id: uuid(),
    name: this.input,
  };
  this.todos.unshift(newProduct);

  storage.save('todos', this.todos);
  filterTodo.call(this, this.filterBy);
  this.input = '';
}
