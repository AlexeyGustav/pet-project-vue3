<template>
  <div class="filter-group">
    <h4 class="filter-title">{{ materialList.label }}</h4>
    <label :key="item" v-for="item in materialList.options" class="filter-check"
      ><input type="checkbox" :value="item" v-model="selectedMaterial" /> {{ item }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps(['materialList']);
const selectedMaterial = defineModel('selectedMaterial');
</script>
