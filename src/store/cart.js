/*
 * @Description: 购物车store
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-17 18:30:39
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-17 20:58:19
 * @FilePath: /starbucks-demo/src/store/cart.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
export default {
  namespaced: true,
  state: {
    // 所有商品
    shopping_cart: []
  },
  getters: {
    // 获取商品数量
    productsNum(state) {
      return state.shopping_cart.length
    }
  },
  mutations: {
    // 商品添加到购物车
    addToCart(state, pro) {
      const index = state.shopping_cart.findIndex(item => item.id == pro.id)
      if (index != -1) {
        // 购物车中商品已存在，则给该商品的数量 num 属性进行加1
        state.shopping_cart[index].num++
      } else {
        // 购物车中没有该商品，则先将商品数量设置成 1
        pro.num = 1
        state.shopping_cart.push(pro)
      }
    },
    // 商品数量增加
    addProductNum(state, pro) {
      state.shopping_cart.forEach(item => {
        if (item.id == pro.id) {
          item.num++
        }
      })
    },
    // 商品数量减少
    reduceProductNum(state, pro) {
      const index = state.shopping_cart.findIndex(item => item.id == pro.id)
      const product = state.shopping_cart[index]
      if (product.num > 1) {
        // 如果数量大于1，则将其数量减一
        product.num--
      } else {
        // 购物车中只有一个此商品，则删除次商品
        state.shopping_cart.splice(index, 1)
      }
    }
  },
  actions: {
  },
  modules: {
  }
}