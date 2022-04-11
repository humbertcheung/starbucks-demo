/*
 * @Description: 
 * @Version: 
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-11 16:17:50
 * @FilePath: /starbucks-demo/src/store/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createStore } from 'vuex'
import user from './user'

export default createStore({
  modules: {
    user
  }
})
