var http = require('http'),
	fs = require('fs'),
	util = require('util');
    ws = require('./ws.js');

http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type' : 'text/html'
	});

	var rs = fs.createReadStream(__dirname + '/template.html');
	util.pump(rs, response);

}).listen(4000);
