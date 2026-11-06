import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      name: 'main',
      component: () => import('@/components/MainPage.vue')
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('@/components/Basket.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/components/Payment.vue'),
    },
    {
      path: '/sucess',
      name: 'sucess',
      component: () => import('@/components/Sucess.vue'),
    },
    { path: '/:pathMatch(.*)*',
      name: 'not-found',
      component:() => import('@/components/NotFound.vue')
    }
  ],
});

export default router;
