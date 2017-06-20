const http = require('http');

module.exports = {
  start() {
    http.createServer((req, res) => {

      console.log(req)

      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write("Hello World!");
      res.end();
    }).listen('8888');
  },
  request(options, callback) {
    const req = http.request(options, (res) => {
      res.setEncoding('utf-8');
      let html = '';
      res.on("data", (chunk) => {
        html += chunk.toString();
      })

      res.on('end', function () {
        callback(html);
      });
    });

    req.on('error', (err) => {
      console.log(err.message);
    });
    req.end();

  }
};