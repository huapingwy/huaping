const server = require('./http');
const cheerio = require('cheerio');

//server.start();
const list = [];
server.request({
  hostname: 'so.iqiyi.com',
  path: '/so/q_%E7%81%AB%E5%BD%B1%E5%BF%8D%E8%80%85%E5%8D%9A%E4%BA%BA%E4%BC%A0?source=suggest&sr=530505767502',
  port: 80
}, function (result) {
  const $ = cheerio.load(result);
  list.push({title: $('.mod_result_list').find('.result_title').eq(0).html().trim()});
  console.log(list)
}); 