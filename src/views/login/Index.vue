<!--
 * @Description: 登录页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 21:24:38
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-05 22:59:42
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
        <van-button round block color="#00682f" native-type="submit">
          确 定
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Qs from "qs";
import { mapMutations } from "vuex";
import { Toast } from "vant";

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
    ...mapMutations(["saveUserInfo"]),
    onSubmit(values) {
      this.$axios({
        method: "post",
        url: "/api/login.php",
        // axios参数类型默认是application/json，使用 axios 进行原生 ajax 请求时 post 无法直接传参
        // 使用qs处理数据，将数据改成表单形式提交
        data: Qs.stringify(values),
      })
        .then((res) => {
          // 登录成功后将数据保存到vuex中
          this.saveUserInfo(res.result.userInfo);
          // 同时也保存数据到session，否则如果只保存在store里，则刷新后vuex中的数据会消失，导致鉴权失效
          // 正常情况下，我们不会把用户敏感信息放入storage，一般只会放token
          sessionStorage.setItem(
            "userInfo",
            JSON.stringify(res.result.userInfo)
          );
          // 跳转到tab页面
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          Toast.fail("登录出错!");
        });
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
