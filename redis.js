const redis = require('redis');
const client = redis.createClient(6379, 'localhost');

client.set('userName', 'jin');
client.get('userName', (err, value) => {
    console.log(value);
});
