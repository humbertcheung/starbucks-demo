<!--
 * @Description: 我的页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-04 21:25:08
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-08 16:18:31
 * @FilePath: /starbucks-demo/src/views/mine/Index.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <van-image class="bg" :src="bg" />
  <div class="container">
    <!-- 用户头像区域 -->
    <div class="user-info common-margin-bottom">
      <van-image class="avatar" :src="userInfo.avatar" width="5rem" height="5rem" round />
      <div class="user-info-desc">
        <b>{{ userInfo.name }}</b>
        <span class="level-desc">{{ levelDesc }} {{ userInfo.phone }}</span>
      </div>
    </div>
    <!-- 用户级别区域 -->
    <div
      class="user-level common-radius common-color common-padding common-margin-bottom"
    >
      <div class="user-level-num">
        <b>7</b>
        <i class="iconfont star-icon-shoucangjia"></i>
      </div>
      <van-progress :percentage="progress" color="#00682f" pivot-text="" />
      <van-row class="user-level-descs">
        <van-col span="6">铁星级</van-col>
        <van-col span="8">银星级</van-col>
        <van-col span="10">金星级</van-col>
      </van-row>
    </div>
    <!-- 卡券区域 -->
    <div class="tickets-cards common-margin-bottom">
      <div class="tickets common-color common-padding common-radius">
        <div class="num-box"><span class="num">4</span>&nbsp;张</div>
        <div>我的好礼券<van-icon name="arrow"></van-icon></div>
      </div>
      <div class="cards common-color common-padding common-radius">
        <div class="num-box"><span class="num">7</span>&nbsp;张</div>
        <div>我的星礼卡<van-icon name="arrow"></van-icon></div>
      </div>
    </div>
    <!-- 我的星巴克区域 -->
    <div class="my-starbucks common-radius common-color common-margin-bottom">
      <b>我的星巴克</b>
      <div class="my-starbucks-options">
        <img src="@/assets/imgs/mine/my-prize.png" />
        <img src="@/assets/imgs/mine/my-coffe.png" />
        <img src="@/assets/imgs/mine/my-gift.png" />
      </div>
    </div>
    <!-- 常用功能 -->
    <div class="usual-operation common-radius common-color common-margin-bottom">
      <b>常用功能</b>
      <div class="usual-operation-cell">
        <service-cell
          class="service-cell"
          v-for="(item, index) in serviceList"
          :key="index"
          :service="item"
        ></service-cell>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCell from "./components/ServiceCell.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // 背景图片
      bg: require("@/assets/imgs/mine/bg-userInfo.png"),
      // 星级的进度
      progress: 30,
      // 常用功能列表的数据
      serviceList: [
        {
          icon: require("@/assets/imgs/mine/service/address.png"),
          title: "地址管理",
          path: "/address",
        },
        {
          icon: require("@/assets/imgs/mine/service/folder.png"),
          title: "发票管理",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/attention.png"),
          title: "关注公众号",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/customerService.png"),
          title: "在线客服",
          path: "",
        },
        {
          icon: require("@/assets/imgs/mine/service/legal.png"),
          title: "条款与证照",
          path: "",
        },
      ],
    };
  },
  components: {
    "service-cell": ServiceCell,
  },
  computed: {
    ...mapState(["userInfo"]),
    levelDesc() {
      if (this.userInfo.star == 7) {
        return "银星级";
      } else {
        return "铁星级";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
}
.container {
  padding: 0px 20px 20px;
  transform: translateY(-10rem);
  // 盒内公共样式
  .common-margin-bottom {
    margin-bottom: 20px;
  }
  .common-padding {
    padding: 15px 20px;
    box-sizing: border-box;
  }
  .common-radius {
    border-radius: 8px;
  }
  .common-color {
    background: #ffffff;
  }
  b {
    font-size: 1.5rem;
  }
  // 用户头像区域样式
  .user-info {
    display: flex;
    .avatar {
      margin-right: 15px;
    }
    .user-info-desc {
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .level-desc {
        font-weight: 600;
      }
    }
  }
  // 用户级别区域样式
  .user-level {
    .user-level-num {
      display: flex;
      justify-content: start;
      align-items: center;
      i {
        font-size: 1.25rem;
        padding-left: 10px;
      }
    }
    .user-level-descs {
      margin-top: 10px;
      font: {
        size: 0.8rem;
        weight: 600;
      }
    }
  }
  // 卡券区域样式
  .tickets-cards {
    display: flex;
    justify-content: center;
    .tickets,
    .cards {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: 600;
      .num-box {
        margin-bottom: 10px;
        .num {
          color: #00682f;
          font: {
            size: 2.6rem;
            weight: 600;
          }
        }
      }
    }
    .tickets {
      margin-right: 10px;
    }
  }
  // 我的星巴克区域样式
  .my-starbucks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    .my-starbucks-options {
      display: flex;
      justify-content: space-around;
      img {
        width: 30%;
      }
    }
  }
  // 常用功能区域
  .usual-operation {
    padding: 10px;
  }
}
</style>
