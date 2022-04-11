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
    <van-nav-bar
      :title="$route.query.type === 'edit' ? '编辑地址' : '新增地址'"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      :address-info="AddressInfo"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      // 省市区数据列表
      areaList,
      // 搜索到的详细地址
      searchResult: "",
      //收货人信息初始值
      AddressInfo: {},
    };
  },
  computed: {
    ...mapGetters("user", ["searchAddress"]),
  },
  methods: {
    ...mapMutations("user", ["addAddress"]),
    onSave(data) {
      // 存储数据
      console.log(data);
      // 构造需要传递的数据，将业务类型标识符type传递过去
      const content = {
        type: this.$route.query.type ? this.$route.query.type : "",
        data,
      };
      this.addAddress(content);
      // 跳回上一页
      this.$router.push("/address");
    },
    onDelete() {
      // 删除数据
    },
  },
  created() {
    // 判断是否是编辑操作
    if (this.$route.query.type === "edit") {
      // 根据id获取数据并展示
      this.AddressInfo = this.searchAddress(this.$route.query.id);
      console.log(this.AddressInfo);
    }
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
