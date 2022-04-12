/*
 * @Description: bus 总线
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-12 22:41:00
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-12 23:00:23
 * @FilePath: /starbucks-demo/src/utils/bus.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import mitt from 'mitt';

const bus = {}
const emitter = mitt()

bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus