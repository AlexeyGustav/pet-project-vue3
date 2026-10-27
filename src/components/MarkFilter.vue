<template>
  <div class="filter-group">
    <h4 class="filter-title">Метка</h4>
    <label class="filter-check"
      ><input type="checkbox" value="Скидка" v-model="selectedMarks" /> Скидка</label
    >
    <label class="filter-check"
      ><input type="checkbox" value="Новинка" v-model="selectedMarks" /> Новинка</label
    >
    <label class="filter-check"
      ><input type="checkbox" value="Хит" v-model="selectedMarks" /> Хит</label
    >
  </div>
</template>

<script setup>
const selectedMarks = defineModel('selectedMarks');
</script>

<style lang="scss" scope></style>
