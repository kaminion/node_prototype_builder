// 실제 entry point
const http = require('http');
const app = require('./app');
const os = require('os');
const url = require('url');

// dotenv도 여기서 설정한다.
require('dotenv').config();

let port = portValidation(process.env.PORT || '3000');
app.set('port', port);
let server = http.createServer(app);

// express 대신 http 모듈에서 리스닝한다
server.listen(port, () => {

    let netWorkinfo = os.networkInterfaces();
    let homeIp = null;

    // IP 추출 
    Object.keys(netWorkinfo).forEach((key) => {

        // 이더넷만 추출하게할것, VMWARE같은것 제외
        if (key.indexOf('이더넷') === -1 && key.indexOf('eth') === -1 && key.indexOf('en') === -1) return -1;

        // 배열 안에서 객체 또 추출
        netWorkinfo[key].forEach((Obj) => {

            // 실제 아이피추출 조건문
            if (Obj['family'].toString().indexOf("IPv4") == -1 || Obj['internal'] !== false) return -1;
            homeIp = Obj['address'];
               
        });

    });

    // 서버가동 멘트
    console.log("웹 서버 가동");
    console.log("서버IP : " + homeIp + ":" + port);
    console.log("서버PC명 : " + os.hostname);
    console.log("OS : " + os.platform());

});


// 포트 유효성 검증, 기본 포트 3000
function portValidation(val)
{
    let port = parseInt(val, 10);

    if (isNaN(port))
    {
        return 3000;
    }

    if (port >= 0)
    {
        return port;
    }

    return false;
}