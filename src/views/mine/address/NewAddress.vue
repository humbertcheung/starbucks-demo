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
import { Dialog } from "vant";
import AMap from "AMap";

export default {
  data() {
    return {
      // 省市区数据列表
      areaList,
      //收货人信息初始值
      AddressInfo: {},
    };
  },
  computed: {
    ...mapGetters("user", ["searchAddress"]),
  },
  methods: {
    ...mapMutations("user", ["addAddress", "deleteAddress"]),
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
      this.$router.push({ path: "/address", query: { title: "地址管理" } });
    },
    onDelete() {
      // 删除数据
      Dialog.confirm({
        title: "警告",
        message: "是否删除“" + this.AddressInfo.name + "”这个地址",
      })
        .then(() => {
          // on confirm
          this.deleteAddress(this.AddressInfo);
          // 跳回上一页
          this.$router.push({ path: "/address", query: { title: "地址管理" } });
        })
        .catch(() => {
          // on cancel
          return;
        });
    },
    getLocation() {
      const self = this;
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
      });
      geolocation.getCurrentPosition(function (status, data) {
        if (status == "complete") {
          // data是具体的定位信息
          console.log(data);
          // 打印位置信息
          // console.log(data.position);
          // 打印经纬度
          console.log(data.position.lng, data.position.lat);
          // 接着进行逆向地理编码，坐标 -> 地址
          var geocoder = new AMap.Geocoder({
            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
            city: "全国",
          });
          var lnglat = [data.position.lng, data.position.lat];
          geocoder.getAddress(lnglat, function (status, result) {
            if (status === "complete" && result.regeocode) {
              console.log(result.regeocode);
              // 将地址信息对象赋值，将定位到的地址展示在表单中
              self.AddressInfo = {
                province: result.regeocode.addressComponent.province,
                city: result.regeocode.addressComponent.city,
                county: result.regeocode.addressComponent.district,
                addressDetail: result.regeocode.formattedAddress,
                areaCode: result.regeocode.addressComponent.adcode, // 必须要加上，否则不显示地区
              };
            } else {
              console.log(result);
            }
          });
        } else {
          // onError(result)
          // 定位出错
          console.log("定位失败错误：", data.message);
          // 调用IP定位
          self.getLngLatLocation();
        }
      });
    },
    // 通过IP获取当前位置
    getLngLatLocation() {
      const self = this;
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          // 查询成功，result即为当前所在城市信息
          console.log("通过ip获取当前城市：", result);
          // 逆向地理编码
          var geocoder = new AMap.Geocoder({
            // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
            city: result.adcode,
          });
          var lnglat = result.rectangle.split(";")[0].split(",");
          geocoder.getAddress(lnglat, function (status, data) {
            if (status === "complete" && data.info === "OK") {
              // result为对应的地理位置详细信息
              console.log(data.regeocode);
              // 将地址信息对象赋值，将定位到的地址展示在表单中
              self.AddressInfo = {
                province: data.regeocode.addressComponent.province,
                city: data.regeocode.addressComponent.city,
                county: data.regeocode.addressComponent.district,
                addressDetail: data.regeocode.formattedAddress,
                areaCode: data.regeocode.addressComponent.adcode, // 必须要加上，否则不显示地区
              };
            } else {
              console.log(data);
            }
          });
        }
      });
    },
  },
  created() {
    // 判断是否是编辑操作
    if (this.$route.query.type === "edit") {
      // 根据id获取数据并展示
      this.AddressInfo = this.searchAddress(this.$route.query.id);
      console.log(this.AddressInfo);
    } else {
      this.getLocation();
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
