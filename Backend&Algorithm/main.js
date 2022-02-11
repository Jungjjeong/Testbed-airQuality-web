var express = require('express');
var app = express();
var cors = require('cors');

var rs = require('fs');
var array


function readdata() {
  rs.readFile('file.txt', function (err, data) {
    if (err) throw err;
    array = data.toString().split("\n");
    console.log("read\n");
  });
}

function timefun() {
  setInterval(readdata,5000);
}

app.use(cors({               // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
   origin: 'http://localhost:8080',
   credentials:true,
}));

app.use(express.json());            // json 형태의 Request Body를 받기 위해 사용
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res){            // front 서버에서 post 방식으로 전송받음
   console.log('입력 ' + array[0]);   // Request Body의 number값 출력
   return res.status(200).json({            // front 서버에 json 형태로 '잘 받음' message 리턴
      message: array[0],
   });
});

app.listen(52273, function() {
   console.log('Server http://127.0.0.1:52273');
   timefun();
});