const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req;
  try {
    console.log(url);
    if (url === "/temperatures") {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.parse(fs.readFileSync('../data/temperature.json', 'utf8')));
    } else if (url === "/precipitations") {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(getPrecipitationData());
    } else {
      // res.writeHead(400, {
      //   'Content-Type': 'text/plain; charset=utf8'
      // });
      res.end("url is not defined");
    }
  } catch (e) {
    // res.writeHead(400, {
    //   'Content-Type': 'text/plain; charset=utf8'
    // });
    res.end(e.message);
  }
});
server.listen(8200);

// function getTemparaturesData() {
//
// }
//
// function getPrecipitationData() {
//
// }
