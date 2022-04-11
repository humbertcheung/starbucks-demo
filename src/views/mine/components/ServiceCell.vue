<!--
 * @Description: 服务类的表格
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-09 10:41:37
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-09 10:41:37
 * @FilePath: /starbucks-demo/src/views/mine/components/ServiceCell.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div
    class="service-cell"
    @click="$router.push({ path: service.path, query: { title: service.title } })"
  >
    <img class="icon" :src="service.icon" />
    <p class="title">{{ service.title }}</p>
    <van-icon name="arrow"></van-icon>
  </div>
</template>

<script>
export default {
  name: "ServiceCell",
  props: {
    service: Object,
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
