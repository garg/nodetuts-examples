var http = require('http');
var fs = require('fs');

var file_path = __dirname + '/cat.jpg';
fs.stat(file_path, function(err, stat){
  stat.size
});
http.createServer(function(request, response) {
  
  response.writeHead(200, {
    'Content-Type': 'image/jpeg',
    'Content-Length':
  }


}).listen(4000)


