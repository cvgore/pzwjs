const {readFile, readFileSync} = require('fs');

readFile('zad7_1.js', (err,data) => {
	if (err) throw err;

	console.log(data.toString('ascii'));
});

const data = readFileSync('zad7_1.js');

for (let i = 0; i < data.length; i++) {
	const l = data[i];

	if (l !== 32 || l < 65 || (l >= 90 && l <= 122)) {
		data.write(' ', i);
	}
}

console.log(data.toString('ascii'));