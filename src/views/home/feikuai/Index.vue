<!--
 * @Description: 啡快页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-14 13:31:43
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-14 13:50:36
 * @FilePath: /starbucks-demo/src/views/home/feikuai/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <!-- 顶部导航栏区域 -->
    <van-nav-bar left-arrow>
      <template #title>
        <van-field type="text" left-icon="search" placeholder="搜索"></van-field>
      </template>
    </van-nav-bar>
    <!-- 商品列表区域 -->
    <div class="product-list">
      <!-- 左侧菜单区域 -->
      <van-sidebar class="left-menu" v-model="selectedCat">
        <van-sidebar-item
          class="left-menu-item"
          v-for="(item, index) in categoriesList"
          :title="item.name"
          :key="index"
        />
      </van-sidebar>
      <!-- 右侧内容区域 -->
      <div class="right-content">
        <!-- 每个分类中的产品列表 -->
        <div
          class="products"
          v-for="(category, index) in categoriesList"
          :key="category"
          :id="index"
        >
          <!-- 分类的标题 -->
          <div class="category-title">
            <b>
              {{ category.name }}
              ({{ category.sub_categories[0].products.length }})
            </b>
          </div>
          <!-- 分类中的产品 -->
          <div
            class="product"
            v-for="item in category.sub_categories[0].products"
            :key="item"
          >
            <!-- 产品图片 -->
            <van-image class="product-img" :src="item.default_image" />
            <!-- 产品描述 -->
            <div class="product-desc" v-if="index != 0">
              <p class="product-desc-name">{{ item.name }}</p>
              <div class="product-desc-price">
                <span
                  >￥
                  <span class="price-num">{{ item.price }}</span>
                </span>
                <van-icon color="#00682f" name="add" size="1.5rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 页面数据，分类列表
      categoriesList: [],
      // 被选中的分类
      selectedCat: 0,
    };
  },
  methods: {
    // 获取数据
    loadData() {
      this.$axios({
        methods: "get",
        url: "/api/menu.php",
      }).then((res) => {
        // 获取菜单类目
        console.log(res.data.categories);
        this.categoriesList = res.data.categories;
      });
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  // 修改导航栏返回按钮颜色
  :deep .van-nav-bar__arrow {
    color: #00682f;
  }
  // 修改搜索按钮颜色
  :deep .van-icon-search {
    color: gray;
  }
  // 去掉侧边栏导航中被选中项左侧的色块
  :deep .van-sidebar-item--select::before {
    display: none;
  }
  // 商品列表区域
  .product-list {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    // 左侧菜单区域
    .left-menu {
      width: 33rem;
    }
    // 右侧内容区域
    .right-content {
      padding: 10px 20px;
      background-color: #ffffff;
      // 每个分类中的产品列表
      .products {
        // 分类标题
        .category-title {
          margin: 15px 0px 20px 10px;
        }
        // 产品
        .product {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          // 产品图片
          .product-img {
            width: 100%;
          }
          // 产品描述
          .product-desc {
            margin-left: 25px;
            display: flex;
            flex-direction: column;
            width: 100%;
            .product-desc-name {
              font-weight: 600;
            }
            .product-desc-price {
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-weight: 600;
              .price-num {
                color: #00682f;
              }
            }
          }
        }
      }
    }
  }
}
</style>
