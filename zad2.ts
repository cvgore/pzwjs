const suma = (...args: number[]) => {
	return args.reduce((a,v) => a + v,0);
}

console.log(suma(1,2,3));