var connect = require('connect'),
	port = 1337;
connect.createServer(connect.static(__dirname)).listen(port);
process.title = 'adbldemo';
console.log('open your browser to http://localhost:%s/examples/index.html', port);