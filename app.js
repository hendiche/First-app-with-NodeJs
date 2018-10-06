// var logger = require('./logger'); //method 1
const log = require('./logger');

function sayHello(name) {
	console.log("hello " + name);
}

sayHello('hendi');

// logger.log("load module logger"); //method 1
log("loading a module");

console.log("====================");
// for more see node.js documentation about path

const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);

console.log("===================");
// for more see node.js documentation about OS
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory, freeMemory);

console.log("====================");
// for more see node.js documentation about file system

const fs = require('fs');

var filesSync = fs.readdirSync('./');
console.log(filesSync);

fs.readdir('./', function(err, files) {
	console.log(err, "err");
	console.log(files, "files");
});

console.log("====================");
// for more see node.js documentation about event

const EventEmit = require('events');
const emit = new EventEmit();// means -> making a noise, produce - signalling

emit.on('messageLogged', (e) => {
	console.log('listener called', e);
});

emit.emit('messageLogged', { id: 1, url: 'https://' });

const LoggerClass = require('./loggerClass'); // logger class
const loggerByClass = new LoggerClass();
loggerByClass.on('messageLogged', (e) => {
	console.log(e, "by class");
});

loggerByClass.log("message");

console.log("======================");
// for more see node.js documentation about HTTP
const http = require('http');
const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('connected');
		res.end();
	}

	if (req.url === '/api/courses') {
		res.write(JSON.stringify([1, 2, 3]));
		res.end();
	}
});

server.on('connection', (socket) => {
	console.log('socket');
});
server.listen(3000);

console.log("listening on port 3000...");