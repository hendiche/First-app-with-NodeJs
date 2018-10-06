var url = 'https://mylogger.io/log';
console.log(__filename); // get full path to this file with this filename
console.log(__dirname); // get full path to this file (location of this file)

function log(message) {
	console.log(message);

}

// module.exports.log = log; //method 1
module.exports = log;
console.log(module);