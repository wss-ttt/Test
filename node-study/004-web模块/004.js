var https = require("https");

https.get("https://www.baidu.com/", function (data) {
    var str = "";
    data.on("data", function (chunk) {
        str += chunk;//监听数据响应，拼接数据片段
    })
    data.on("end", function () {
        console.log(str.toString())
    })
})