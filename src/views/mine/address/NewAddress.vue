<!--
 * @Description: 新增地址页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-10 22:18:06
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-10 22:18:06
 * @FilePath: /starbucks-demo/src/views/mine/address/NewAddress.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <van-nav-bar title="新增地址" left-arrow @click-left="$router.go(-1)" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      // 省市区数据列表
      areaList,
      // 搜索到的详细地址
      searchResult: "",
    };
  },
  methods: {
    onSave(data) {
      console.log(data);
      console.log(this.searchResult);
      // 存储数据
    },
    onDelete() {
      // 删除数据
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
  :deep .van-switch--on {
    background-color: #00682f;
  }
}
</style>
