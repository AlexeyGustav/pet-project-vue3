<template>
  <div class="filter-group">
    <h4 class="filter-title">Стиль</h4>
    <label :key="item" v-for="item in filters.styleList.options" class="filter-check"
      ><input :value="item" v-model="currentStyle" type="checkbox" /> {{ item }}</label
    >
  </div>
</template>

<script setup>
import { useFilters } from '../stores/filtersProducts.js';
const filters = useFilters();
// defineProps(['styleList']);
const currentStyle = defineModel('currentStyle');
</script>
