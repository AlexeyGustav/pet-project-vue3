<template>
  <div class="filter-group">
    <h4 class="filter-title">{{ colorList.label }}</h4>
    <label :key="item" class="filter-check" v-for="item in colorList.options">
      <input :value="item" type="checkbox" v-model="currentColor" /> {{ item }}
    </label>
  </div>
</template>

<script setup>
defineProps(['colorList']);
const currentColor = defineModel('currentColor');
</script>
