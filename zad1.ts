const counter = (() => {
	let state = 0;
	return () => ++state;
})();

console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = (() => {
	var state = 0;
	return () => ++state;
})();

console.log(counter2());
console.log(counter2());
console.log(counter2());