const {createReadStream} = require('fs');

const rdStream = createReadStream('zad7_2.js', {
	encoding: 'utf-8'
});

let data = '';

rdStream.on('data', (chunk) => {
	data += chunk.replace(/[^a-z ]/ig, '');
});

rdStream.on('end', () => console.log(data));