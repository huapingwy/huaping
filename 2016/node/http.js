const http = require('http');
const fs = require("fs");
const path = require('path');

/*
const server = http.createServer();

server.on('request', handle);

function handle (req, res) {
    var data = fs.readFileSync(__dirname+"/views/http.html");  // 读完文档数据并返回后，程序才能继续。
    console.log(data);
    res.write(data);
    res.end();
}

server.listen(4040);

console.log(4040, __dirname)*/

const cheerio = require('cheerio');

http.get('http://www.cnblogs.com/best/p/5909023.html', function (response) {
    response.setEncoding('utf-8');

    let html = '';

    response.on('data', function (chunk) {
        html += chunk;
    });

    response.on('end', function () {
        const $ = cheerio.load(html);

        //fs.writeFileSync('1.json', JSON.stringify(jsonData, false, 4), 'utf-8');
        fs.writeFileSync('1.html', $('#topics').html(), 'utf-8');
    })
});


// http.get('http:\/\/images.dmzj.com\/z\/\u7ec8\u7ed3\u7684\u70bd\u5929\u4f7f\/\u7b2c49\u8bdd\/001.jpg', function (response) {
//     let html;
//     response.on('data', function (chunk) {
//         html += chunk;
//     })
//     response.on('end', function () {
//         fs.writeFileSync('m.js', html, 'utf-8');
//     });
// })

// http.get('m.dmzj.com/view/zhongjiedezhitianshi/', function (response) {
//     req.setHeader();
//
// });




/*
const options = {
    hostname: 'm.dmzj.com',
    path: '/view/zhongjiedezhitianshi',
    method: 'get',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename=MyFileName.ext'
    }
};


const req = http.request(options, function (res) {
    const filename = path.join(__dirname, '/');
    fs.readdir(filename, function (err, files) {
        //console.log(files);
    })

    res.on('data', function (chunk) {
        console.log(chunk.toString())
    })
});

req.end();*/


/*
http.Server(function (req, res) {
    console.log(11)
})*/
