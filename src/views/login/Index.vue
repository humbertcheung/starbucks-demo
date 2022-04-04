<!--
 * @Description: 登录页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 21:24:38
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-05 00:57:17
 * @FilePath: /starbucks-demo/src/views/login/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <van-image :src="bg" />
  <div class="container">
    <van-image class="logo" width="120" height="120" :src="logo" />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="loginInfo.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          autocomplete
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginInfo.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          autocomplete
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block color="#00682f" native-type="submit"> 确 定 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/logo.png"),
      bg: require("@/assets/imgs/login/bg.png"),
      loginInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
  .logo {
    margin-bottom: 30px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
}
</style>
