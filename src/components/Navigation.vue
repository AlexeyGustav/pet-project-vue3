<template>
  <button class="tab" :class="{ active }" @click="$emit('activeTab', category)" type="button">
    {{ category }}
  </button>
</template>

<script setup>

defineProps(['category', 'active']);
defineEmits(['activeTab']);

</script>
