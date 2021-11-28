// zad 5,6,7

export class Car {
	constructor(public brand: string, public plate: string) {
	}

	public opis() {
		return this.brand + ' - ' + this.plate;
	}
}

export class Truck extends Car {
	constructor(brand: string, plate: string, public trailer: string){
		super(brand, plate);
	}
}