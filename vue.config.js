/*
 * @Description: 
 * @Version: 
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-12 15:04:08
 * @FilePath: /starbucks-demo/vue.config.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        //要请求的域名
        target: 'http://localhost/starbucks-backend',
        //通过pathRewrite重写地址，将前缀/api转为/
        pathRewrite: { '^/api': '' },
        //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    externals: {
      AMap: "AMap",
    },
  }
})