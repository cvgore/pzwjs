// zad 5,6,7

import { Car, Truck } from './zad5_mod';

const a = [
	new Car("BMW", "SBX1234"),
	new Car("FIAT", "SBA3210"),
	new Car("AUDI", "SBZ3333"),

	new Truck("MAN", "TR03123", "proffesional"),
]

a.forEach(x => console.log(x.opis()))