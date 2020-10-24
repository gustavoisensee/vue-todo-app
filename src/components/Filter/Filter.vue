<style module lang="scss">
  @import './Filter.scss';
</style>

<template>
  <button
    :class="[$style.filter, filterBy === filter && $style.filter_active]"
    @click="setFilter(filter)"
  >{{text}}</button>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    name: 'FilterComp',
    computed: {
      filterBy: function() {
        return this.$store.state.filterBy;
      }
    },
    methods: mapMutations(['setFilter']),
    props: {
      filter: String,
      text: String
    }
  }
</script>
