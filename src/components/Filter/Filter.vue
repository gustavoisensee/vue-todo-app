<style module lang="scss">
  @import './Filter.scss';
</style>

<template>
  <button
    :class="[$style.filter, filterBy === filter && $style.filter_active]"
    @click="filterBy=filter"
  >{{text}}</button>
</template>

<script>
  export default {
    name: 'FilterComp',
    props: {
      filterBy: String,
      filter: String,
      text: String
    }
  }
</script>
