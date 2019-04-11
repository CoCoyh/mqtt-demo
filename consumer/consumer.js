'use strict';

const mqtt = require('../mqtt');
  
// mqtt.subscribe('MQTT_COCO_TEST_SYS', { qos: 2 }, (err) => {
//     if (err) {
//       console.error('【mqtt.subcribe】: 订阅上报消息失败: ', JSON.stringify(err));
//     } else {
//         mqtt.on('message', (topic, message, packet) => {
//             console.log(`【mqtt.subscribe】: 订阅上报消息成功: topic: ${topic}, message: ${message.toString()}, packet: ${JSON.stringify(packet)}`);
//         });
//         // mqtt.unsubscribe('MQTT_COCO_TEST_SYS');
//     }
//   });
console.log('>>>>>>>>>>>>>>>> mqtt', mqtt);

  /**
 * 订阅客户端上下线
 */
setInterval(function() { //一秒钟发送一次 消息到主题 SN69143809293670state 消息为 setr=xxxxxxx1xx
    mqtt.subscribe('GID_ONLINE_MQTT', { qos: 1 }, (err) => {
        if (err) {
            console.error('【mqtt.subcribe】: 订阅客户端上下线失败 ', JSON.stringify(err));
          } else {
              mqtt.on('message', (topic, message, packet) => {
                  console.log(`【mqtt.subscribe】: 订阅客户端上下: topic: ${topic}, message: ${message.toString()}, packet: ${JSON.stringify(packet)}`);
              });
              // mqtt.unsubscribe('MQTT_COCO_TEST_SYS');
          }
    })
    
}, 1000);