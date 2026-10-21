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

<style lang="scss" scope>
.filter-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 10px;
}
</style>
