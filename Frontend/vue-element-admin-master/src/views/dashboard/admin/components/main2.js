var express = require("express");
var app = express();
var cors = require("cors");
var today = new Date();
var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + today.getDate()).slice(-2);

var dateString = year + "-" + month + "-" + day;

var rs = require("fs");
var array;
var memofile = "";
var i = 0;

function readdata() {
  var co_list = [
    727, 726, 735, 750, 778, 797, 830, 888, 972, 1003, 1015, 1013, 976, 920,
    897, 850, 823, 799, 789, 792, 778, 738, 735, 735, 726, 723,
  ];

  var temperature = String(Math.floor(Math.random() * (20 - 18 + 1)) + 18);
  var humidity = String(Math.floor(Math.random() * (55 - 42 + 1)) + 42);
  var CO2 = co_list[i];
  i += 1;
  // var CO2 = String(Math.floor(Math.random() * (900 - 650 + 1)) + 650);
  var dust = String(Math.floor(Math.random() * (14 - 11 + 1) + 11));
  var minidust = String(Math.floor(Math.random() * (10 - 9 + 1) + 9));
  var filedata =
    dateString +
    "\t" +
    temperature +
    "\t" +
    humidity +
    "\t" +
    CO2 +
    "\t" +
    dust +
    "\t" +
    minidust +
    "\n";
  memofile = filedata + memofile;

  rs.readFile("file.txt", function (err, data) {
    if (err) throw err;

    console.log(filedata);
    rs.writeFile("file.txt", memofile, "utf-8", function (error) {
      console.log("write end");
    });
    array = data.toString().split("\n");
    console.log("read\n");
  });
}

function timefun() {
  setInterval(readdata, 5000);
}

app.use(
  cors({
    // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
    origin: "http://localhost:9527",
    credentials: true,
  })
);

app.use(express.json()); // json 형태의 Request Body를 받기 위해 사용
app.use(express.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  // front 서버에서 post 방식으로 전송받음
  console.log("입력 " + array[0]); // Request Body의 number값 출력
  return res.status(200).json({
    // front 서버에 json 형태로 '잘 받음' message 리턴
    message: array[0],
  });
});

app.listen(52273, function () {
  console.log("Server http://127.0.0.1:52273");

  timefun();
});
