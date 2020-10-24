export function todos() {
  return this.$store.state.todos;
}

export function filteredTodos() {
  const { todos, filterBy } = this.$store.state;

  if (filterBy === 'all') {
    return todos;
  } else if (filterBy === 'active') {
    return todos.filter(t => !t.checked);
  } else {
    return todos.filter(t => !!t.checked);
  }
}
