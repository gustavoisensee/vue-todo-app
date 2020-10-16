<style module lang="scss">
  @import './FiltersContainer.scss';
</style>

<template>
  <div :class="$style.filter_container">
    <div>
      <FilterComp filter="all" text="All" :filterBy="filterBy" :filterTodo="filterTodo"  />
      <FilterComp filter="active" text="Active" :filterBy="filterBy" :filterTodo="filterTodo"  />
      <FilterComp filter="completed" text="Completed" :filterBy="filterBy" :filterTodo="filterTodo"  />
    </div>
    <span>{{total}} items</span>
  </div>
</template>

<script>
  import FilterComp from '../Filter';

  export default {
    name: 'FiltersContainer',
    components: {
      FilterComp
    },
    props: {
      total: Number,
      filterBy: String,
      filterTodo: Function
    }
  }
</script>

<style>

</style>