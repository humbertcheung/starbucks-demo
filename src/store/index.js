/*
 * @Description: 
 * @Version: 
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-17 19:08:13
 * @FilePath: /starbucks-demo/src/store/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createStore } from 'vuex'
import user from './user'
import cart from './cart'

export default createStore({
  modules: {
    user,
    cart,
  }
})
