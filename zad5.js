const rawData = `[
	{"name": "John"},
	{"name": "Alice"},
	{"name": "Pigeon"}
]`;

const data = JSON.parse(rawData);

for (const p of data) {
	console.log(p);
}

data.push({"name": "Adam"});

console.log(JSON.stringify(data));