<template>
  <div class="filter-group">
    <h4 class="filter-title">{{ filters.materialList.label }}</h4>
    <label :key="item" v-for="item in filters.materialList.options" class="filter-check"
      ><input type="checkbox" :value="item" v-model="selectedMaterial" /> {{ item }}
    </label>
  </div>
</template>

<script setup>
import { useFilters } from '../stores/filtersProducts.js';
const filters = useFilters();
// const props = defineProps(['materialList']);
const selectedMaterial = defineModel('selectedMaterial');
</script>
