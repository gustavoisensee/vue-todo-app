<style module lang="scss">
  @import './List.scss';
</style>

<template>
  <transition-group
    name="list"
    :enter-class="$style.list_enter"
    :leave-to-class="$style.list_enter"
    :enter-active-class="$style.list_active"
    :leave-active-class="$style.list_active"
    :move-class="$style.list_move"
    tag='ul'
  >
    <li v-for="todo in filteredTodos" :key="todo.id" :class="[$style.list_item]">
      <div :class="$style.checkbox_container">
        <input type="checkbox" :id="todo.id" v-model="todo.checked" @click="toggleTodo(todo)">
        <label :for="todo.id" :class="[todo.checked && $style.completed]">{{ todo.name }}</label>
      </div>
      <button @click="deleteTodo(todo)" :class="$style.delete_button" />
    </li>
  </transition-group>
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
