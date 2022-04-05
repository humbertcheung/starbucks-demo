/*
 * @Description: 脚本入口文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-05 22:26:18
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

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(Vant).mount('#app')