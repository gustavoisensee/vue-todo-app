<template>
  <div class="filter_container">
    <div>
      <FilterComp filter="all" text="All" />
      <FilterComp filter="active" text="Active" />
      <FilterComp filter="completed" text="Completed" />
    </div>
    <span>{{filteredTodos.length}} items</span>
  </div>
</template>

<script>
  import FilterComp from '../Filter';
  import { filteredTodos } from '../../computed/todos';

  export default {
    name: 'FiltersContainer',
    components: {
      FilterComp
    },
    computed: {
      filteredTodos
    }
  }
</script>

<style scoped>
  .filter_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    margin-bottom: 8px;
  }
</style>