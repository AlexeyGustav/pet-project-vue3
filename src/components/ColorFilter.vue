<template>
  <div class="filter-group">
    <h4 class="filter-title">{{ filters.colorList.label }}</h4>
    <label :key="item" class="filter-check" v-for="item in filters.colorList.options">
      <input :value="item" type="checkbox" v-model="currentColor" /> {{ item }}
    </label>
  </div>
</template>

<script setup>
import { useFilters } from '../stores/filtersProducts.js';
const filters = useFilters();
// defineProps(['colorList']);
const currentColor = defineModel('currentColor');
</script>
