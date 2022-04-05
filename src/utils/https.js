/*
 * @Description: axios请求工具
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-05 15:02:30
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-05 21:19:06
 * @FilePath: /starbucks-demo/src/utils/https.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import axios from 'axios'
import { Toast } from 'vant'

// 创建一个 axios 对象
const http = axios.create({
  timeout: 5000
})

// 数据请求拦截器
http.interceptors.request.use(config => {
  // 在这里可以配置一些请求头、token等信息，本项目比较简单，因此原样返回
  return config
}, error => {
  console.log(error);
  return Promise.reject(error)
})

// 响应数据的拦截器
http.interceptors.response.use(res => {
  // 获取返回的数据
  const data = res.data
  // 状态码为 2xx 范围时都会调用该函数，处理响应数据
  if (res.status === 200) {
    // 返回的数据的状态是 true，表示拿到数据想要的数据了
    if (data.status) {
      return Promise.resolve(data)
    } else {
      // 当拿到的不是想要的数据时
      Toast.fail(data.msg)
      return Promise.reject(data)
    }
  }
}, error => {
  if (error.response.status) {
    // 状态码超过 2xx 范围时都会调用该函数，处理错误响应
    switch (error.response.status) {
      case 404:
        Toast.fail("请求路径找不到！")
        break;
      case 500:
        Toast.fail("服务器内部错误!")
        break;
      default:
        break;
    }
  }
  return Promise.reject(error)
})

export default http