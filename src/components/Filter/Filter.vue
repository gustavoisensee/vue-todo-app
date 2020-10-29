<template>
  <button
    :class="['filter', { filter_active: filterBy === filter }]"
    @click="setFilter(filter)"
  >
    {{ text }}
  </button>
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
};
</script>

<style scoped>
.filter {
  background-color: #ffffff;
  border: 1px solid #c3c3c3;
  color: #424242;
  padding: 8px;
  outline: none;
  margin-right: 8px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 200ms;
  cursor: pointer;
  font-size: 14px;
}

.filter_active {
  background-color: #5be05b;
  border: 1px solid #5be05b;
}
</style>
