/*
 * @Description: 用户store
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-11 16:16:44
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-14 13:21:43
 * @FilePath: /starbucks-demo/src/store/user.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
export default {
  namespaced: true,
  state: {
    userInfo: sessionStorage.getItem('userInfo'),
  },
  getters: {
    // 获取地址列表
    addressList(state) {
      let list = []
      if (!state.userInfo.common_address) {
        return []
      }
      state.userInfo.common_address.forEach(item => {
        // 对数据进行改造，改造成前端的地址列表可以展示的数据结构，
        // 其中item中的所有字段都可以转化，除了address不一样
        let address = {
          ...item,
          address: `${item.province} ${item.city} ${item.county} ${item.addressDetail}`,
        }
        list.push(address)
      })
      return list
    },
    // 根据id获取地址
    // searchAddress: state => id => state.userInfo.common_address.find(item => item.id === id)
    searchAddress(state) {
      return id => state.userInfo.common_address.find(item => item.id == id)
    }
  },
  mutations: {
    saveUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    // 添加/编辑地址
    addAddress(state, content) {
      let data = content.data
      if (content.type != "edit") {
        // 判断添加的数据是否有id属性，如果没有则表示是新增根据列表长度计算
        if (!data.id) {
          data.id = state.userInfo.common_address.length + 1
        }
        state.userInfo.common_address.push(data)
      } else {
        state.userInfo.common_address.splice(state.userInfo.common_address.findIndex(item => item.id == data.id), 1, data)
      }
    },
    // 删除地址
    deleteAddress(state, address) {
      state.userInfo.common_address.splice(state.userInfo.common_address.findIndex(item => item.id == address.id), 1)
    }
  },
  actions: {
  },
  modules: {
  }
}
