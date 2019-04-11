'use strict';

module.exports = {
    mqtt: {
        host: '',
        username: '',
        password: '',
        clientId: 'GID_SERVER@@@server',
        options: {
            keepalive: 60,
            protocolId: 'MQTT',
            protocolVersion: 4,
            clean: false,
            reconnectPeriod: 1000,
            connectTimeout: 30 * 1000,
            rejectUnauthorized: false,
        }
    },
    consumer: {
        host: '',
        username: '',
        password: '',
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