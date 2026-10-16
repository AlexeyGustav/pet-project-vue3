<template>
  <div class="toolbar">
    <span>Найдено {{ sum }} товаров</span>
    <span>Сортировка ▾</span>
  </div>
</template>

<script setup>
defineProps(['sum']);
</script>