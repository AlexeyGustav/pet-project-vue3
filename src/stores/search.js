import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSearch = defineStore('search', () => {
  // Поиск
  const input = ref('');
  const isFocused = ref(false);

  function writeInput(event) {
    input.value = event.target.value;
  }

  function focusInput() {
    isFocused.value = true;
  }

  function blurInput() {
    isFocused.value = false;
  }

  return {
    input,
    isFocused,
    writeInput,
    focusInput,
    blurInput,
  };
});
