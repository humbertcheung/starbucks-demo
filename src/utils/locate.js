/*
 * @Description: 定位工具
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-12 15:32:42
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-12 23:12:17
 * @FilePath: /starbucks-demo/src/utils/locate.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import AMap from 'AMap'

const locate = {
  // 获取当前位置
  getLocation() {
    var geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000
    });
    geolocation.getCurrentPosition(function (status, data) {
      if (status == 'complete') {
        // data是具体的定位信息
        console.log(data);
        // 打印位置信息
        // console.log(data.position);
        // 打印经纬度
        console.log(data.position.lng, data.position.lat);
        // 接着进行逆向地理编码，坐标 -> 地址
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: '全国'
        })
        var lnglat = [data.position.lng, data.position.lat]
        geocoder.getAddress(lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            console.log(result.regeocode)
            return Promise.resolve(result.regeocode)
          } else {
            return Promise.reject(result)
          }
        })
      } else {
        // onError(result)
        // 定位出错
        console.log('定位失败错误：', data.message);
        // 调用IP定位
        self.getLngLatLocation();
      }
    })

  },
  // 通过IP获取当前位置
  getLngLatLocation() {
    var citySearch = new AMap.CitySearch();
    citySearch.getLocalCity(function (status, result) {
      if (status === 'complete' && result.info === 'OK') {
        // 查询成功，result即为当前所在城市信息
        console.log('通过ip获取当前城市：', result);
        // 逆向地理编码
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: result.adcode
        });
        var lnglat = result.rectangle.split(';')[0].split(',');
        geocoder.getAddress(lnglat, function (status, data) {
          if (status === 'complete' && data.info === 'OK') {
            // result为对应的地理位置详细信息
            console.log(data.regeocode);
            return Promise.resolve(data.regeocode)
          } else {
            return Promise.reject(data);
          }
        });
      }
    });
  }
}

export default locate
