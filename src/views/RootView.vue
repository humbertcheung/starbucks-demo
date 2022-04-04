<!--
 * @Description: Tabbar容器组件
 * @Version: 1，0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 22:24:56
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-04 23:44:25
 * @FilePath: /starbucks-demo/src/views/RootView.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
 * note: 由于像登录等组件不需要显示tabbar，为了和这些组件进行区分使用，
 *       因此不能直接将tabbar放入到app.vue中，因此放到此文件中
-->
<template>
  <div class="root">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "../components/TabBar.vue";

export default {
  name: "RootView",
  components: {
    "tab-bar": TabBar,
  },
};
</script>

<style lang="scss" scoped></style>
