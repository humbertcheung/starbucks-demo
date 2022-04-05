/*
 * @Description: 
 * @Version: 
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-05 21:39:33
 * @FilePath: /starbucks-demo/src/store/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: sessionStorage.getItem('userInfo')
  },
  getters: {
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
