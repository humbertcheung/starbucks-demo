/*
 * @Description: 路由配置文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-11 20:29:28
 * @FilePath: /starbucks-demo/src/router/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import RootView from '../views/RootView.vue'

const routes = [
  { // 标签页导航的路由
    path: '/',
    component: RootView,
    redirect: '/home', // 重定向页面，即设置默认显示的
    children: [
      {
        path: '/home',
        component: () => import('../views/home/Index.vue'),
      },
      {
        path: '/club',
        component: () => import('../views/club/Index.vue')
      },
      {
        path: '/orders',
        component: () => import('../views/orders/Index.vue')
      },
      {
        path: '/mine',
        component: () => import('../views/mine/Index.vue'),
      },
      {
        path: "/address",
        component: () => import('../views/mine/address/Index.vue')
      },
      {
        path: "/new-address",
        component: () => import('../views/mine/address/NewAddress.vue')
      }
    ]
  },
  { // 登录页面的路由
    path: '/login',
    component: () => import('../views/login/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 添加路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login' || store.state.user.userInfo) {
    next()
  } else {
    next('/login')
  }
})

export default router
