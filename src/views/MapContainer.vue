<!--
 * @Description: 高德地图组件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-10 09:42:04
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-10 09:42:04
 * @FilePath: /starbucks-demo/src/views/mine/components/MapContainer.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";

export default {
  data() {
    // 使用 shallowRef 进行非深度监听，因为在 Vue3 所使用的 Proxy 拦截操作会改变 JSAPI 原生对象
    // 建议 JS API 相关对象采用非响应式的普通对象来存储
    return {
      map: shallowRef(null),
    };
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "f478e46faff9000b0a8914c043937975", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("container", {
          // container, 设置地图容器id
          viewMode: "3D", //是否为3D地图模式
          zoom: 16, // 初始化地图级别
          // center: [118.635979, 31.137009], // 初始化地图中心点位置,
        });
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style lang="scss" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 800px;
}
</style>
