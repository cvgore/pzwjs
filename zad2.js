setInterval(() => {
	console.log(new Date());
}, 1000);

setInterval(() => {
	let count = 0;

	let interval = setInterval(() => {
		if (count > 5) {
			clearInterval(interval);
			return;	
		}

		count++;
		console.log('a'.repeat(5));
	}, 10);
}, 1000);

const ALPHABET = 'aąbcćdeęfghijklmnoópqrsśtuvxyzźż'.split('');
const VOVELS = 'aąeęioóuy'.split('');

for (let letter of ALPHABET) {
	if (VOVELS.indexOf(letter) > -1) {
		setTimeout(() => console.log(letter), 2000);
	} else {
		setTimeout(() => console.log(letter), 500);
	}
}
