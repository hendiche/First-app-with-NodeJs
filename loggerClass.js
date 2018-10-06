const EventEmit = require('events');

class Logger extends EventEmit {
	log(message) {
		console.log(message);

		this.emit('messageLogged', { id: 1, url: 'https://' });
	}
}

module.exports = Logger;