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
      <div :class="$style.checkbox_container" v-show="!todo.edit" @dblclick="todo.edit=true">
        <input type="checkbox" :id="todo.id" v-model="todo.checked">
        <label :for="todo.id" :class="[todo.checked && $style.completed]">
          {{ todo.name }}
        </label>
      </div>
      <div :class="$style.checkbox_container" v-show="todo.edit">
        <form @submit.prevent="todo.edit=false" :class="$style.form_input">
          <input
            type="input"
            :id="todo.id + '-todo'"
            :class="$style.input"
            v-model.lazy="todo.name" @blur="todo.edit=false"
          />
        </form>
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
      deleteTodo: Function
    }
  }
</script>
