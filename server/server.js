const http = require('http');
const fs = require('fs');

const APP_PORT = 8200;
const FS_PREFIX = "/home/zhdanov/Documents/Projects/tests/bytinkoff/wheather-front/data/";
const HEADER_TYPE = { 'Content-Type': 'text/plain; charset=utf8' };

const server = http.createServer((req, resp) => {
  // resp.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req;
  try {
    switch (url) {
      case "/temperatures":
        resp.writeHead(200, HEADER_TYPE);
        readJson('temperature.json', json => resp.end(json));
        break;
      case "/precipitations":
        resp.writeHead(200, HEADER_TYPE);
        readJson('precipitation.json', json => resp.end(json));
        break;
      default:
        resp.writeHead(400, HEADER_TYPE);
        resp.end("url is not defined");
    }
  } catch (e) {
    resp.writeHead(500, HEADER_TYPE);
    resp.end(e.message);
  }
});
server.listen(APP_PORT);

function readJson(filename, callback) {
  fs.readFile(FS_PREFIX + filename, (err, data) => {
    if (err) throw err;
    return callback(data);
  });
}
