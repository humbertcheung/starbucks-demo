<!--
 * @Description: 主页
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 21:24:14
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-04 21:26:32
 * @FilePath: /starbucks-demo/src/views/home/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <map-container></map-container>
</template>

<script>
import MapContainer from "../MapContainer.vue";
export default {
  components: {
    "map-container": MapContainer,
  },
};
</script>

<style lang="scss" scoped></style>
