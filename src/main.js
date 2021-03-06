/*
 * @Description: 脚本入口文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-12 22:59:14
 * @FilePath: /starbucks-demo/src/main.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/font/iconfont.css'
import axios from '@/utils/https'
import bus from './utils/bus'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$bus = bus
app.use(store).use(router).use(Vant).mount('#app')