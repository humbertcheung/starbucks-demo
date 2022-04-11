<!--
 * @Description: 地址管理页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-10 20:19:58
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-10 20:19:58
 * @FilePath: /starbucks-demo/src/views/mine/address/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <!-- 顶部导航栏 -->
  <div class="container">
    <van-nav-bar
      :title="this.$route.query.title"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 地址列表区域 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 地址列表为空时的提示信息 -->
    <div class="no-data" v-if="list.length == 0">暂无地址，请先添加地址哦~</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 地址列表
      list: [],
      // 被选中的地址的 id
      chosenAddressId: -1,
    };
  },
  methods: {
    onAdd() {
      // 跳转到新增地址页面
      console.log("跳转到新增地址页面");
      this.$router.push("/new-address");
    },
    onEdit() {
      // 编辑地址
      console.log("编辑地址");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  :deep .van-nav-bar__title,
  :deep .van-nav-bar__arrow {
    color: #00682f;
  }
  :deep .van-button--danger {
    background-color: #00682f;
    border: #00682f;
  }
  .no-data {
    color: gray;
    text-align: center;
  }
}
</style>
