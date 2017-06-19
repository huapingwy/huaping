const EventsEmitter = require('events');

console.log(EventsEmitter,111);

const emitter = new EventsEmitter();

console.dir(emitter);

emitter.on('events', () => {
	console.log('change events');
});

emitter.emit('events');