<!--
 * @Description: 标签栏组件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 22:29:51
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-04 23:25:51
 * @FilePath: /starbucks-demo/src/components/TabBar.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <van-tabbar v-model="active" active-color="#00682f" route>
    <van-tabbar-item v-for="(item, index) in tabConfig" :key="index" :to="item.path">
      <!-- 标签页文本内容 -->
      <span>{{ item.title }}</span>
      <!-- 定义标签页图标 -->
      <template #icon="props">
        <img :src="props.active ? iconSrc[item.icon_active] : iconSrc[item.icon]" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: 0,
      // 每个标签的配置
      tabConfig: [
        {
          icon: "home",
          icon_active: "home_active",
          title: "首页",
          path: "/home",
        },
        {
          icon: "club",
          icon_active: "club_active",
          title: "星享俱乐部",
          path: "/club",
        },
        {
          icon: "orders",
          icon_active: "orders_active",
          title: "订单",
          path: "/orders",
        },
        {
          icon: "mine",
          icon_active: "mine_active",
          title: "我的",
          path: "/mine",
        },
      ],
      // 图片对应的路径
      iconSrc: {
        home: require("../assets/imgs/tabbar/home.png"),
        home_active: require("../assets/imgs/tabbar/home_active.png"),
        club: require("../assets/imgs/tabbar/club.png"),
        club_active: require("../assets/imgs/tabbar/club_active.png"),
        orders: require("../assets/imgs/tabbar/orders.png"),
        orders_active: require("../assets/imgs/tabbar/orders_active.png"),
        mine: require("../assets/imgs/tabbar/mine.png"),
        mine_active: require("../assets/imgs/tabbar/mine_active.png"),
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
