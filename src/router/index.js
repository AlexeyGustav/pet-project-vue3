import { createRouter, createWebHistory } from 'vue-router';
// import App from '@/App.vue';
import MainPage from '@/components/MainPage.vue';
import Basket from '@/components/Basket.vue';
import Payment from '@/components/Payment.vue';
import Sucess from '@/components/Sucess.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/sucess",
      name: "sucess",
      component: Sucess,
    },
  ],
});

export default router;
