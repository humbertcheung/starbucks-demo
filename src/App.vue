<!--
 * @Description: 
 * @Version: 
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 16:29:03
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-09 11:38:00
 * @FilePath: /starbucks-demo/src/App.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <router-view />
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  methods: {
    initAMap() {
      // 设置高德地图API密钥
      window._AMapSecurityConfig = {
        securityJsCode: "5d686f23861151d2c919976459fa5252",
      };
      AMapLoader.load({
        key: "f478e46faff9000b0a8914c043937975", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Geolocation", "AMap.Geocoder", "AMap.CitySearch"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      });
      console.log("定位服务启动...");
    },
  },
  mounted() {
    // 初始化地图
    this.initAMap();
  },
};
</script>
<style lang="scss">
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
</style>
