const http = require('http');
const fs = require('fs');

const APP_PORT = 8200;

const server = http.createServer((req, resp) => {
  resp.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req;
  try {
    switch (url) {
      case "/temperatures":
        resp.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        readJson('temperature.json', json => resp.end(json));
        break;
      case "/precipitations":
        resp.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        readJson('precipitation.json', json => resp.end(json));
        break;
      default:
        resp.writeHead(400, { 'Content-Type': 'text/plain; charset=utf8' });
        resp.end("url is not defined");
    }
  } catch (e) {
    resp.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
    resp.end(e.message);
  }
});
server.listen(APP_PORT);

function readJson(filename, callback) {
  fs.readFile('../data/' + filename, (err, data) => {
    if (err) throw err;
    return callback(data);
  });
}
