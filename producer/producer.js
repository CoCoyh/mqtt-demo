'use strict';

const mqtt = require('../mqtt');
const assert = require('assert');

//client.subscribe('presence');
const num = 0;
const qtt = 'setr=xxxxxxx1xx'; //定义消息（可以为字符串、对象等）

/**
 * 发布消息
 */   
// setInterval(() => {
    // const message = {
    //     id: '0006',
    // }
    // mqtt.publish('GID_ONLINE_MQTT', JSON.stringify(message), { qos: 1, retain: true }, (err, msg) => {
    //     if (err) {
    //     console.error('【service.publish】: 发布消息失败：', JSON.stringify(err));
    //     throw new Error(`【service.publish】: 发布消息失败：${err}`);
    //     }
    //     console.log('【service.publish】: 发布消息成功：', msg);
    // });

// }, 3000);
const a = [{name: 'ss', age: 1,}, {name: 'ff', age: 2}].splice(1, 1)
console.log('........', a);