// This buffers the entire file and then sets all of it in one go potentially causing node.js to get overwhelmed. bad! 

var http = require('http');
var fs = require('fs');

var file_path = __dirname + '/cat.gif';

fs.stat(file_path, function(err, stat){
	
	if (err) {
		throw err;
	}
	http.createServer(function(request, response) {
  
		response.writeHead(200, {
			'Content-Type': 'image/gif',
			'Content-Length': stat.size
		});

		fs.readFile(file_path, function(err, file_content) {
      	response.write(file_content);
      	response.end();
    	});
  	}).listen(4000)

});



