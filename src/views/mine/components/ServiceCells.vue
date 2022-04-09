<!--
 * @Description: 服务类的表格
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-09 10:41:37
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-09 10:41:37
 * @FilePath: /starbucks-demo/src/views/mine/components/ServiceCells.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="service-cell" v-for="(item, index) in serviceList" :key="index">
    <img class="icon" :src="item.icon" />
    <p class="title">{{ item.title }}</p>
    <van-icon name="arrow"></van-icon>
  </div>
</template>

<script>
export default {
  name: "ServiceCells",
  data() {
    return {
      serviceList: [
        {
          icon: require("@/assets/imgs/mine/service/address.png"),
          title: "地址管理",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/folder.png"),
          title: "发票管理",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/attention.png"),
          title: "关注公众号",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/customerService.png"),
          title: "在线客服",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/legal.png"),
          title: "条款与证照",
          path: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 2rem;
  }
  .title {
    margin-left: 20px;
    text-align: left;
    flex-grow: 1;
    font: {
      size: 1.1rem;
      weight: 500;
    }
  }
}
</style>
