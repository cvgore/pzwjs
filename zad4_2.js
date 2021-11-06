const list = ["1", "2", "3", "4"];

process.nextTick(function display(idx = 0) {
	if (idx >= list.length) {
		return;
	}

	console.log(list[idx]);

	return display(idx + 1);
});
