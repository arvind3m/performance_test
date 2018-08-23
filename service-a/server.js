var http = require('http');
var handleRequest = function(request, response){
    console.log("rx request for url:" + request.url);
    http.get({
        hostname: 'localhost',
        port: 4545,
        path: '/',
        headers: { 'Content-Type': 'application/json' }
      }, (res) => {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.write('Micro Response');
        response.end();
      });
};

var www = http.createServer(handleRequest);
www.listen(9003);