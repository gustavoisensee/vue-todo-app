<style module lang="scss">
  @import './List.scss';
</style>

<template>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.text" :class="$style.list_item">
      <div :class="$style.checkbox_container">
        <input type="checkbox" :id="todo.id" v-model="todo.checked" @click="toggleTodo(todo)">
        <label :for="todo.id" :class="[todo.checked && $style.completed]">{{ todo.name }}</label>
      </div>
      <button @click="deleteTodo(todo)" :class="$style.delete_button" />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'List',
    props: {
      filteredTodos: Array,
      deleteTodo: Function,
      toggleTodo: Function
    }
  }
</script>
