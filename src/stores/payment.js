import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePayment = defineStore('payment', () => {
  const typePay = ref("Банковская карта");

  const numberCard = ref("");
  const name = ref("");
  const validityPeriod = ref("");
  const cvc = ref("");

  return {
    typePay,
    name,
    validityPeriod,
    cvc,
    numberCard
  }
});
