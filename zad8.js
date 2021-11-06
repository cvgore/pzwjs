async function app() {
	await every(1000, () => console.log(Date.now()));

	await every(1000, () => {
		let count = 0;

		let interval = setInterval(() => {
			if (count > 5) {
				clearInterval(interval);
				return;	
			}

			count++;
			console.log('a'.repeat(5));
		}, 10);
	});

	const ALPHABET = 'aąbcćdeęfghijklmnoópqrsśtuvxyzźż'.split('');
	const VOVELS = 'aąeęioóuy'.split('');

	for (let letter of ALPHABET) {
		if (VOVELS.indexOf(letter) > -1) {
			await wait(2000, () => console.log(letter));
		} else {
			await wait(500, () => console.log(letter));
		}
	}
}

function every(time, cb) {
	let resolve;
	return new Promise((resolve) => {
		setInterval(() => {
			cb();
			resolve();
		}, time);
	});
}

function wait(time, cb) {
	return new Promise((resolve) => {
		setTimeout(() => {
			cb();
			resolve();
		}, time);
	});
}

app().then(_ => _);