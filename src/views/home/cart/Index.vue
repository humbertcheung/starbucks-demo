<!--
 * @Description: 购物车界面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-17 17:16:11
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-17 17:16:11
 * @FilePath: /starbucks-demo/src/views/home/cart/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      class="nav-bar"
      title="购物车"
      left-arrow
      @click-left="$router.push('/feikuai')"
    />
    <!-- 底部提交订单栏 -->
    <div class="product-list">
      <van-card
        class="product-card"
        v-for="item in shopping_cart"
        :key="item.id"
        :num="item.num"
        :price="(item.price / 100).toFixed(2)"
        desc="描述信息"
        :title="item.name"
        :thumb="item.default_image"
      >
        <template #footer>
          <van-button class="num-change-btn" size="mini" @click="reduceProduct(item)">
            <van-icon name="minus"></van-icon>
          </van-button>
          <van-button class="num-change-btn" size="mini" @click="addProductNum(item)">
            <van-icon name="plus"></van-icon>
          </van-button>
        </template>
      </van-card>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Dialog } from "vant";
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("cart", ["shopping_cart"]),
    totalPrice() {
      let price = 0;
      this.shopping_cart.forEach((item) => {
        price += item.price * item.num;
      });
      return price;
    },
  },
  methods: {
    ...mapMutations("cart", ["addProductNum", "reduceProductNum"]),
    reduceProduct(item) {
      if (item.num == 1) {
        Dialog.confirm({
          title: "警告",
          message: "您确定删除 “ " + item.name + " ” 吗？",
        })
          .then(() => {
            this.reduceProductNum(item);
          })
          .catch(() => {
            return;
          });
      } else {
        this.reduceProductNum(item);
      }
    },
    onSubmit() {},
  },
  created() {
    // console.log(this.shopping_cart);
  },
};
</script>

<style lang="scss" scoped>
// 隐藏滚动条（不兼容IE、FF）
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.container {
  overflow: hidden;
  :deep .van-nav-bar__title,
  :deep .van-nav-bar__arrow {
    color: #00682f;
  }
  :deep .van-submit-bar__button {
    background: #00682f;
    border: #00682f;
  }
  .nav-bar {
    position: fixed;
    top: 0px;
    width: 100%;
  }
  .product-list {
    box-sizing: border-box;
    position: fixed;
    top: 46px;
    height: 100%;
    width: 100%;
    overflow: auto;
    padding: 10px 15px 104px;
    .product-card {
      border-radius: 5px;
      box-shadow: gainsboro 2px 2px 10px 1px;
      .num-change-btn:active {
        background: #00682f;
        color: #ffffff;
      }
    }
  }
}
</style>
