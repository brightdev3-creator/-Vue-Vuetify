/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/event-staffing',
    name: 'Event Staffing',
    component: () => import('@/views/EventStaffing.vue')
  },
  {
    path: '/retail-demo',
    name: 'Retail and Demo',
    component: () => import('@/views/RetailDemo.vue')
  },
  {
    path: '/product-sampling',
    name: 'Product Sampling',
    component: () => import('@/views/ProductSampling.vue')
  },
  {
    path: '/mobile-tours',
    name: 'Mobile Tours',
    component: () => import('@/views/MobileTours.vue')
  },
  {
    path: '/experiential-marketing',
    name: 'Experiential Marketing',
    component: () => import('@/views/ExperientialMarketing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('@/views/Careers.vue')
  },
  {
    path: '/insights',
    name: 'Insights',
    component: () => import('@/views/Insights.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/our-story',
    name: 'Our Story',
    component: () => import('@/views/OurStory.vue')
  },
  {
    path: '/leadership-team',
    name: 'Leadership Team',
    component: () => import('@/views/LeadershipTeam.vue')
  },
  {
    path: '/why-partner-with-us',
    name: 'Why Partner with Us',
    component: () => import('@/views/WhyPartnerWithUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
