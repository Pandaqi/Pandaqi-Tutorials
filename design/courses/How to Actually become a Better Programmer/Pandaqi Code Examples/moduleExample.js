class Bark {
	init(parent) {
		// bind this part of our functionality to the click event (of our parent)
		parent.clickBinds.push(this.bark);
	}

	bark() {
		console.log("BARK!");
		// somehow, make a bark sound
	}
}

class Collectible {
	init(parent) {
		parent.collideBinds.push(this.collect);
	}

	collect(otherObject) {
		// if the player collects us
		if(otherObject.name == 'player') {
			console.log("COLLECT ME!");

			// destroy ourselves somehow
			parent.destroy();

			// increment collectible counter by 1 somehow
		}
	}
}

// for converting module names to their classes
// (gives more flexibility and clear code in the long run)
const dict = new Map([['Bark', Bark], ['Collectible', Collectible]]);

class Dog {
	constructor() {
		// pre-defined list of modules
		this.myModules = ["Bark", "Collectible"];

		// this will fill with functions that should be bound to a click event
		this.clickBinds = [];

		// this will fill with functions that should be bound to a collide event
		this.collideBinds = [];

		// when object is created, initialize all modules
		for(var i = 0; i < this.myModules.length; i++) {
			// grab name
			var name = this.myModules[i];

			// instantiate actual object
			// (this is where you could also set parameters on the module)
			var m = new (dict.get(name))();

			// if init is not defined, don't do anything
			if(m["init"] === undefined) { continue; }

			// finally, call initialization
			m.init(this);
		}
	}

	// suppose our program has functionality that
	// detects clicks on objects and then calls this
	onClick() {
		for(var i = 0; i < this.clickBinds.length; i++) {
			this.clickBinds[i]();
		}
	}

	// suppose our program has functionality that
	// detects when two objects collide
	onCollide(otherObject) {
		for(var i = 0; i < this.collideBinds.length; i++) {
			this.collideBinds[i](otherObject);
		}
	}
}

var dog = new Dog();