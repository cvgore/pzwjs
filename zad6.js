const {Buffer} = require('buffer');

const buf = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
	buf.write(String.fromCharCode(i + 65), i);
}

console.log(buf.toString('ascii'));
console.log(buf.toString('utf-8'));

