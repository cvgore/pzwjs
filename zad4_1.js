const list = ["1", "2", "3", "4"];

for (const el of list) {
	process.nextTick(() => {
		console.log(el);
	});
}