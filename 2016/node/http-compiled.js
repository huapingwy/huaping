const http = require('http');
var fs = require("fs");

const server = http.createServer();

server.on('request', handle);

function handle(req, res) {
    var data = fs.readFileSync(__dirname + "/views/http.html"); // 读完文档数据并返回后，程序才能继续。
    console.log(data);
    res.write(data);
    res.end();
}

server.listen(4040);

console.log(4040, __dirname);

//# sourceMappingURL=http-compiled.js.map