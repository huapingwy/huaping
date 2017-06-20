const EventsEmitter = require('events');

const emitter = new EventsEmitter();

console.dir(emitter);

emitter.on('events', () => {
	console.log('change events');
});

emitter.emit('events');