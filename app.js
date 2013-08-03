var connect = require('connect'),
	port = 1337;
connect.createServer(connect.static(__dirname)).listen(port);
process.title = 'adblock presentation demo';
console.log('open your browser to http://localhost:' + port);