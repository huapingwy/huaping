const request = require('request');
const cheerio = require('cheerio');
var fs = require("fs");

/*request.get('http://www.cnblogs.com/meteoric_cry/archive/2012/08/18/2645530.html', function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(body);
    console.log(response.headers)
  }
})*/


/*
request({
  'url': 'http://m.dmzj.com/view/zhongjiedezhitianshi/',
  'headers': {
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': 'attachment; filename=MyFileName.ext'
  }
}, function (error, response, body) {
  console.log(response.headers);
})*/


/*request('http://m.dmzj.com/view/zhongjiedezhitianshi/').pipe(fs.createWriteStream('huang')).on('close', function () {
  console.log('wanc')
});*/

fs.readdir('http://m.dmzj.com/view/zhongjiedezhitianshi/', function (err, files) {
  console.log(files);
})