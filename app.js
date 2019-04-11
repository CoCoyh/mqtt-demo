const mqtt = require('mqtt');
const express = require("express");
const app = express();
const hostName = '127.0.0.1'; //http服务的提供服务ip
const port = 9003;
let num = 1;
let m;
person = new Object();
person.firstname = "Bill";
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});//json header头

app.get("/coco/get", function(req, res) {
    //如果有get请求/coco/get则执行回调中的代码(方便!)
    
    // console.log("请求url：", req.path)
    // console.log("请求参数：", req.query)
    req.setTimeout(200); 
    //设置请求建立200ms 就中断接受请求,但还是在接收到返回信息后返回给它
    const client = mqtt.connect('mqtt://127.0.0.1:1883', {
        username: 'username',
        password: 'password',
        clientId: 'ap' + num
    });
    //建立连接
    client.on('connect', function() {
        const sn = req.query.sn;
        const k = parseInt(req.query.k) - 1;
        // 127.0.0.1:8080/coco/get?sn=SN69143809293670&k=1&v=3&cmd=setr
        
        client.subscribe(sn + 'state', { qos: 1 });
        //开始订阅
        
        if (req.query.cmd != 'setr') {
            m = req.query.cmd;
            if (req.query.cmd == 'qk') {
                m = 'setr=1111111111';
            }
            if (req.query.cmd == 'qg') {
                m = 'setr=0000000000';
            }

        } else {
            m = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
            m[k] = req.query.v;;

            m = req.query.cmd + '=' + m.join('');
        }
        //一系列简单接口处理

        client.publish(sn + 'ctr', m, { qos: 1, retain: true }); // 'Hello mqtt ' + (num++)
        //发送
        client.end();
        //发送完后立即结束此次和服务端建立的请求
    });
    client.on('message', function(topic, message) { 
        //订阅信息一直在运行,如果有设备返回信息到主题,就执行此回调
        aaak(message.toString());
        //将值通过aaak函数传递给res.end返回给页面数据;
        client.end();
        

    });

    function aaak(aaaa) {
        const objaaaa = JSON.parse(aaaa);
        console.log(objaaaa);
        num++;
        client.end();
        res.end(aaaa);
    }

})

app.listen(port, hostName, function() {
    console.log(`服务器运行在http://${hostName}:${port}`);
});
