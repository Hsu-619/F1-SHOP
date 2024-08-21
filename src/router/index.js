import { createRouter, createWebHistory } from 'vue-router'
import PageHomeView from '@/views/PageHomeView.vue'
import PageLoginView from '@/views/PageLoginView.vue'
import PageOneView from '@/views/PageOneView.vue'
import PageTwoView from '@/views/PageTwoView.vue'
import PageThreeView from '@/views/PageThreeView.vue'
import PageFourView from '@/views/PageFourView.vue'


const title = 'F1-Shop';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes: [
    {
      path: '/',
      name: 'pagehome',
      component: PageHomeView,
      meta: {
        title: title,
      }
    },
    {
      path: '/pagelogin',
      name: 'pagelogin',
      component: PageLoginView
    },
    {
      path: '/pageone',
      name: 'pageone',
      component: PageOneView,
      meta: {
        title: title,
      }
    },
    {
      path: '/pagetwo',
      name: 'pagetwo',
      component: PageTwoView,
      meta: {
        title: title,
      }
    },
    {
      path: '/pagethree',
      name: 'pagethree',
      component: PageThreeView,
      meta: {
        title: title,
      }
    },
    {
      path: '/pagefour',
      name: 'pagefour',
      component: PageFourView,
      meta: {
        title: title,
      }
    },
  ]
})

export default router
