<style module lang="scss">
  @import './FiltersContainer.scss';
</style>

<template>
  <div :class="$style.filter_container">
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
