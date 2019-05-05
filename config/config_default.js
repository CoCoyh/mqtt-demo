'use strict';

module.exports = {
  mqtt: {
    host: 'mqtt://post-cn-v0h128nqh0d.mqtt.aliyuncs.com',
    username: 'Signature|LTAITwRV1Y07wisB|post-cn-v0h128nqh0d',
    password: 'EPfzZT+z57FCsMrlkXM0I1WvJCI=',
    clientId: 'GID_SERVER@@@server',
    lastBufferedRequest: JSON.stringify({ name: 'last_message' }),
    lastWillRetain: true,
    options: {
      keepalive: 60,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: false,
      reconnectPeriod: 1000,
      connectTimeout: 2 * 1000,
      rejectUnauthorized: false,
    }
  },
    consumer: {
        host: 'mqtt://post-cn-v0h128nqh0d.mqtt.aliyuncs.com',
        username: 'Signature|LTAITwRV1Y07wisB|post-cn-v0h128nqh0d',
        password: 'ZOtaqIFRNYMbNUE1eQ14na7ELdU=',
        clientId: 'GID_ONLINE@@@COCO_001',
        options: {
            keepalive: 60,
            protocolId: 'MQTT',
            protocolVersion: 4,
            clean: true,
            reconnectPeriod: 1000,
            connectTimeout: 30 * 1000,
            rejectUnauthorized: false,
        }
    }
};