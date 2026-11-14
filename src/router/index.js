import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },

    // 登录页(没有底部导航)
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },

    // 商品详情页(没有底部导航,底部是自己的操作栏)
    {
      path: '/product/:id',
      name: 'productDetails',
      component: () => import('../views/productDetails.vue')
    },

    // 带有底部导航的主业务模块
    {
      path: '/',
      component: Layout, // 使用 layout 组件
      children: [
        { path: 'home', name: 'home', component: () => import('../views/home.vue') },
        { path: 'category', name: 'category', component: () => import('../views/category.vue') },
        { path: 'cart', name: 'cart', component: () => import('../views/cart.vue') },
        { path: 'profile', name: 'profile', component: () => import('../views/profile.vue') }
      ]
    }
  ]
})

export default router
