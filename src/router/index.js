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
      component: () => import('@/components/MainPage.vue'),
    },
    // {
    //   path: "/catalog",
    //   component: CatalogLayout,
    //   children: [

    //   ],
    // },
    {
      path: "/basket",
      name: "basket",
      component: () => import('@/components/Basket.vue'),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import('@/components/Payment.vue'),
    },
    {
      path: "/sucess",
      name: "sucess",
      component: () => import('@/components/Sucess.vue'),
    },
  ],
});

export default router;
