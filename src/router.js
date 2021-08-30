import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/article/Home.vue'
// import Article from '@/views/article/tech/Article.vue'
// import Menu from '@/views/article/tech/Menu.vue'

Vue.use(VueRouter)

const routes = [

  /** Login */
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },

  /** Home */
  {
    path: '/',
    component: () => import('@/views/article/Index.vue'),

    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/article/About.vue'),
      },
    ],
  },
 
  /** Tech */
  {
    path: '/tech',
    component: () => import('@/views/article/tech/Index.vue'),

    children: [
      {
        path: '',
        name: 'Tech',
        component: () => import('@/views/article/tech/Tech.vue'),
        meta: {
          header: false,
        }
      },
      {
        path: ':lang',
        name: 'Menu',
        component: () => import('@/views/article/tech/Menu.vue'),
        meta: {
          header: true,
        }
      },
      {
        path: ':lang/:id',
        name: 'Article',
        component: () => import('@/views/article/tech/Article.vue'),
        meta: {
          header: true,
        }
      },
    ]
  },

  /** Error */
  {
    path: '/404',
    name: 'Not Found',
    component: () => import('@/views/error/404.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})

export default router
