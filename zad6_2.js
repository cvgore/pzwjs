const {Buffer} = require('buffer');

const LINE_LEN = 77;

const buf = Buffer.alloc(LINE_LEN * 11 - 1).fill('.');

for (let i = 1; i < 11; i++) {
	buf.write('\n', i * LINE_LEN - 1);
}

// Draw roof
const ROOF_LINES = 4;
for (let i = 0; i < ROOF_LINES; i++) {
	const offset = LINE_LEN * (i + 2);
	const start = 26;
	const j = ROOF_LINES - i;
	const k = i * 2;
	const len = 20;

	buf.write('x'.repeat(len + 6), offset + start + j, len + k);
}

// Draw walls
const WALL_LINES = 5;
for (let i = 0; i < WALL_LINES; i++) {
	const offset = LINE_LEN * (i + 6);
	const start = 28;
	const len = 24;

	buf.write('#'.repeat(len), offset + start, len);
}

// Draw windows
for (let i = 0; i < 2; i++) {
	const offset = LINE_LEN * (i + 7);
	const start = 31;
	const start2 = start + 15;
	const len = 3;

	buf.write('.'.repeat(len), offset + start, len);
	buf.write('.'.repeat(len), offset + start2, len);
}

// Draw windows
for (let i = 0; i < 3; i++) {
	const offset = LINE_LEN * (i + 8);
	const start = 39;
	const len = 2;

	buf.write('.'.repeat(len), offset + start, len);
}
console.log(buf.toString('ascii'))