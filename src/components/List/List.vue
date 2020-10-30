<template>
  <transition-group
    name="list"
    enter-class="list_enter"
    leave-to-class="list_enter"
    enter-active-class="list_active"
    leave-active-class="list_active"
    move-class="list_move"
    tag='ul'
  >
    <li v-for="todo in filteredTodos" :key="todo.id" class="list_item">
      <div class="checkbox_container" v-show="!todo.edit" @dblclick="todo.edit=true">
        <input type="checkbox" :id="todo.id" v-model="todo.checked">
        <label :for="todo.id" :class="{ 'completed': todo.checked }">
          {{ todo.name }}
        </label>
      </div>
      <div class="checkbox_container" v-show="todo.edit">
        <form @submit.prevent="todo.edit=false" class="form_input">
          <input
            type="input"
            :id="todo.id + '-todo'"
            class="input"
            v-model.lazy="todo.name" @blur="todo.edit=false"
          />
        </form>
      </div>
      <button @click="deleteTodo(todo)" class="delete_button">
        <img src="../../assets/delete.svg" class="delete_button_icon" />
      </button>
    </li>
  </transition-group>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { filteredTodos } from '../../computed/todos';

  export default {
    name: 'List',
    methods: mapMutations([
      'deleteTodo'
    ]),
    computed: {
      filteredTodos
    }
  }
</script>

<style scoped lang="scss">
  .list_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 20px rgba(0,0,0,.2);
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
  }

  .checkbox_container {
    display: flex;
    align-items: center;
    flex: 1;

    & label {
      padding-left: 16px;

      &.completed {
        text-decoration: line-through;
      }
    }

    & * {
      cursor: pointer;
    }
  }

  .delete_button {
    background-color: #ff5555;
    border: 1px;
    border-radius: 25px;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    width: 36px;
    height: 36px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

    &:active {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .delete_button_icon {
    width: 16px;
    height: 16px;
  }

  .list_active {
    transition: opacity 300ms;
  }
  .list_enter {
    opacity: 0;
  }
  .list_move {
    transition: transform 300ms;
  }

  .form_input {
    display: flex;
    flex: 1;
  }

  .input {
    padding: 8px;
    width: 100%;
    border: 1px solid #dadada;
    border-radius: 4px;
    margin-right: 16px;
    outline: none;
  }
</style>
