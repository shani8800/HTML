const http = require('http');
const du = require('./dateutils');

http.createServer(function (req, res){
    res.writelead(200, {'Content-type': 'text/html'});
res.write(du.myDateTime());
    res.end('Hello World!kl ');
}).listen(8080);