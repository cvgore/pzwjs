function displayable(constructor: Function) {
	constructor.prototype.display = () => {
		console.log(constructor.toString());
	}
}

@displayable
class Human {
	private name: string;

	constructor() {
		this.name = "joe";
	}
}

// enforce any type, to allow calling display method
const h: any = new Human();

h.display();


