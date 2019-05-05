'use strict';
// const mosca = require('mosca');
// //构建自带服务器
// const MqttServer = new mosca.Server({
//     port: 1883
// });
// //对服务器端口进行配置， 在此端口进行监听
// MqttServer.on('clientConnected', function(client) {
//     //监听连接
//     console.log('client connected', client.id);
// });
// /**
//  * 监听MQTT主题消息
//  **/
// MqttServer.on('published', function(packet, client) {
//     //当客户端有连接发布主题消息
//     const topic = packet.topic;
//     console.log(packet);
//     switch (topic) {
//         case 'test':
//             console.log('message-publish', packet.payload.toString());
//             //MQTT转发主题消息
//             MqttServer.publish({ topic: 'other', payload: 'sssss' });
//             break;
//         case 'other':
//             console.log('message-123', packet.payload.toString());
//             break;
//     }
// });

// MqttServer.on('ready', function() {
//     //当服务开启时
//     console.log('mqtt is running...');
// });

// 测试commit与issue
const mqtt = require('mqtt');
const config = require('./config/config_default');


// ${YourProductKey}.iot-as-mqtt.${YourRegionId}.aliyuncs.com:1883
const client = mqtt.connect(config.mqtt.host, config.mqtt); //连接到服务端

console.log('mqtt连接', client);
client.on('message', (msg) => {
    console.log('mqtt 连接成功')
});

client.on('close', (msg) => {
    console.log('断开mqtt连接');
});

client.on('reconnect', (msg) => {
    console.log('重新连接mqtt');
});
module.exports = client;
