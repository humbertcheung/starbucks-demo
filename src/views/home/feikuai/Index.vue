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
    <van-nav-bar class="nav-bar" left-arrow @click-left="$router.push('/home')">
      <template #title>
        <van-field type="text" left-icon="search" placeholder="搜索"></van-field>
      </template>
    </van-nav-bar>
    <!-- 商品列表区域 -->
    <div class="product-list">
      <!-- 左侧菜单区域 -->
      <van-sidebar class="left-menu" v-model="selectedCat" @change="categoryChange">
        <van-sidebar-item
          class="left-menu-item"
          v-for="(item, index) in categoriesList"
          :title="item.name"
          :key="index"
          ref="sidebarItem"
        />
      </van-sidebar>
      <!-- 右侧内容区域 -->
      <div class="right-content" ref="rightContent">
        <!-- 每个分类中的产品列表 -->
        <div
          :class="['products', { toTop: selectedCat == index ? true : false }]"
          v-for="(category, index) in categoriesList"
          :key="category"
          :id="index"
          ref="products"
        >
          <!-- 分类的标题 -->
          <div class="category-title" refs="categoryTitle">
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
                <van-icon class="add-btn" color="#00682f" name="add" size="1.5rem" />
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
      // 是否置顶
      isTop: false,
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
    // 左侧菜单栏导航切换菜单
    categoryChange() {
      // 右侧内容随导航的切换置顶显示，设置左侧菜单点击时右侧和左侧联动
      // document.getElementById(this.selectedCat).scrollIntoView({ behavior: "smooth" });
      this.$refs.products.forEach((item) => {
        if (item.id == this.selectedCat) {
          // 如果id和被选中的 item的索引相同,说明该内容是item对应的内容，那么就进行锚点定位
          item.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
  created() {
    this.loadData();
  },
  mounted() {
    // 监听右侧的内容的滚动事件，设置右侧滚动时和左侧和右侧联动
    let self = this;
    this.$refs.rightContent.addEventListener("scroll", function () {
      // 判断 .poducts 距离父视图顶部的距离
      self.$refs.products.forEach((item, index) => {
        // 当右侧内容距离页面顶部的距离等于 5 时说明此时此内容置顶了，
        // 那么左侧的导航像也需要做相应的变更
        // 注：减 56是因为整个列表设置了 top: 56px，向下便偏移了 56
        // 那getBoundingClientRect()方法。返回一个对象，其中包含了left、right、top、bottom四个属性，
        // 分别对应了该元素的左上角和右下角相对于浏览器窗口（viewport）左上角的距离。
        if (item.getBoundingClientRect().top - 56 < 5) {
          self.selectedCat = index;
        }
        // 解决最后一个因为高度过短，左侧标签无法更新问题
        // offsetHeight 是元素的高度
        if (
          index == self.categoriesList.length - 2 &&
          item.getBoundingClientRect().bottom < item.offsetHeight
        ) {
          self.selectedCat = self.categoriesList.length - 1;
        }
      });
    });
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
  // 导航条
  .nav-bar {
    width: 100%;
    // 固定导航条
    position: fixed;
    top: 0px;
  }
  // 商品列表区域
  .product-list {
    // 固定列表区域，解决锚点定位时顶部内容被导航栏遮挡问题
    position: fixed;
    top: 56px;
    height: 100%;
    overflow: hidden;
    padding-bottom: 56px; // 解决最后一个内容被遮挡问题
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    // 左侧菜单区域
    .left-menu {
      overflow: auto;
      width: 30%;
      padding-bottom: 56px;
    }
    // 右侧内容区域
    .right-content {
      width: 70%;
      overflow: auto;
      padding: 10px 20px 56px;
      background-color: #ffffff;
      // 每个分类中的产品列表
      .products {
        // 分类标题
        padding-top: 5px;
        .category-title {
          margin: 15px 0px 20px 10px;
        }
        // 产品
        .product {
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          // 产品图片
          .product-img {
            width: 100%;
          }
          // 产品描述
          .product-desc {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            width: 100%;
            .product-desc-name {
              font-weight: 500;
            }
            .product-desc-price {
              display: flex;
              align-items: center;
              justify-content: stretch;
              font-weight: 500;
              .price-num {
                color: #00682f;
              }
              .add-btn {
                margin-left: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
