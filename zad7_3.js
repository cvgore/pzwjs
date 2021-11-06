const {createReadStream} = require('fs');

const rdStream = createReadStream('zad7_2.js', {
	encoding: 'utf-8'
});

let data = '';

const ALPHABET =  'aąbcćdeęfghijklmnoópqrsśtuvxyzźż'.split('');
const ROT13_ALPHABET =  'noópqrsśtuvxyzźżaąbcćdeęfghijklm'.split('');
const LOOKUP = ALPHABET.reduce(
	(acc, val, idx) => {
		acc[val] = ROT13_ALPHABET[idx]
		return acc;
	}
	,{}
);
console.log(LOOKUP);
rdStream.on('data', (chunk) => {
	const tmp = chunk
		.replace(/[^a-z ]/ig, '')
		.replace(/[a-z]/ig, (m) => {
			return LOOKUP[m];
		});

	data += tmp;
});

rdStream.on('end', () => console.log(data));