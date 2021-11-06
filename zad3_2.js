const { EventEmitter } = require('events');

class User {	
	constructor(name) {
		this.name = name;
		this.eventEmitter = new EventEmitter();
	}

	rename(name) {
		const oldName = this.name;

		this.name = name;
		
		this.eventEmitter.emit('rename', {
			user: this,
			oldName: oldName
		});
	}

	onRename(cb) {
		this.eventEmitter.on('rename', cb);
	}
}

const usr = new User('Student');

usr.onRename((ev) => console.log('renamed from %s to %s', ev.oldName, ev.user.name));

usr.rename('Testowy');