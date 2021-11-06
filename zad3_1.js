const http = require('http');
const events = require('events');

const PORT = 8080;

const eventEmitter = new events.EventEmitter();

const server = http.createServer((request, response) => {
	eventEmitter.emit('request');
	response.end('Your first HTTP server written in Node.js');
});

server.listen(PORT, () => {
	eventEmitter.on('request', (ev) => {
		console.log('Hello from event handler');
	});
	console.log("Server listening on: http://localhost:%s", PORT);
});

