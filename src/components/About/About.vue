<template>
  <div>
    <Header msg="About this little project!" />
    <div>
      <p>This Little project has the aim of creating a Todo list, where the user can add, edit, delete and mark them as done!</p>
      <strong>How does it work?</strong>
      <ul class="list" data-testid="list">
        <li>Adding a new todo: type your todo in the input field and press enter.</li>
        <li>Editing a todo: click twice in the todo's row. An input field will show up, so, edit it and press enter.</li>
        <li>Deleting a todo: click at the delete button and confirm on the confirmation box.</li>
        <li>Marking the todo as done: click at the checkbox or in the label.</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../Header';

  export default {
    components: {
      Header
    }
  }
</script>

<style scoped>
  .list {
    list-style-type: disc;
    margin-left: 24px;
    line-height: 32px;
    margin-top: 8px;
  }
</style>