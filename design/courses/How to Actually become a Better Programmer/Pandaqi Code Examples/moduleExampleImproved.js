class Bark {
	init(parent, config) {
		this.config = config;
		parent.moduleBinds['click'].push(this.bark.bind(this));
	}

	bark() {
		console.log("BARK with loudness " + this.config.loudness + "!");
	}
}

class Rage {
	init(parent, config) {
		this.config = config;
		parent.moduleBinds['collide'].push(this.rage.bind(this));
	}

	rage(obj) {
		console.log("RAGE with ferocity " + (this.config.value * obj.loudness) + "!");
	}
}

const dict = new Map([['Bark', Bark], ['Rage', Rage]]);

class Entity {
	constructor(config) {
		// this will hold ALL binds for all events
		this.moduleBinds = { 'click': [], 'collide': [] };

		// this will hold ALL modules (so they can be easily accessed/contacted from elsewhere)
		this.myModules = {};

		// configure all modules
		for(var mod in config) {
			var m = new (dict.get(mod))(); // create class
			this.myModules[mod] = m; // save in list
			if(m["init"] === undefined) { continue; } // skip if no init
			m.init(this, config[mod]); // otherwise, call init
		}
	}

	// @parameter type = 'click' or 'collide' or whatever
	// @parameter params = any parameters that belong to this event (like the "otherObject" you collided with)
	onEvent(type, params) {
		const binds = this.moduleBinds[type], num = binds.length;
		for(var i = 0; i < num; i++) {
			binds[i](params);
		}
	}
}

var config = {
	"Bark": { loudness: 3 },
	"Rage": { value: 2 }
};

var dog = new Entity(config);