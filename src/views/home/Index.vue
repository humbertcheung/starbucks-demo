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
  <div class="container">
    <div class="banner">
      <!-- 轮播图区域 banner -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200">
        <van-swipe-item>
          <img src="@/assets/imgs/home/banner_10years.jpg" alt="十周年" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/home/banner_dropdown.gif" alt="下拉刷新" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/home/banner_feikuai.jpg" alt="啡快" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 产品区域 -->
    <div class="product">
      <!-- 核心区域，包含啡快和专星送 -->
      <div class="core">
        <div class="feikuai" @click="$router.push({ name: 'FeiKuai' })">
          <!-- <p>在线点，到店取</p> -->
          <img src="@/assets/imgs/home/core-feikuai.png" alt="啡快" />
        </div>
        <div class="zhuanxingsong">
          <!-- <p>外送到家</p> -->
          <img src="@/assets/imgs/home/core-zhuanxingsong.png" alt="专星送" />
        </div>
      </div>
      <!-- 活动区域，包含：送心意、福利购、拼单 -->
      <div class="activity">
        <div>
          <img src="@/assets/imgs/home/activity-care.png" alt="心意" />
          <p>暖暖的心意</p>
        </div>
        <div>
          <img src="@/assets/imgs/home/activity-welfare.png" alt="福利" />
          <p>星粉必备神卡</p>
        </div>
        <div>
          <img src="@/assets/imgs/home/activity-pindan.png" alt="拼单" />
          <p>羊城欢迎您</p>
        </div>
      </div>
    </div>
    <!-- 查找门店区域 -->
    <div class="store" @click="$router.push({ name: 'City' })">
      <div>
        <b>查找门店</b>
        <p>带你发掘更多线下门店</p>
      </div>
      <img src="@/assets/imgs/home/store-find.png" alt="门店" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  background-repeat: no-repeat;
}
.container {
  .product {
    padding: 15px;
    .core {
      background: #fff;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      .feikuai {
        border-right: 1px solid #ccc;
      }
    }
    .activity {
      background: #fff;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      div {
        width: 6rem;
        p {
          text-align: center;
        }
      }
    }
    .ad {
      border-radius: 20px;
      img {
        border-radius: 8px;
      }
    }
  }
  .store {
    width: 100%;
    height: 6rem;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    b {
      font-size: 1.5rem;
    }
    img {
      width: 30%;
    }
  }
}
</style>
