const process = require('process');

const { searchAnimals, countAnimals } = require('./functions');
let data = require('./data').data;

if (process.argv.length === 2) {
	console.log(JSON.stringify(data, null, 2));
	process.exit();
}

if (process.argv.length > 4) {
	console.log('Too much arguments');
	process.exit();
}

let filter = '';
let count = false;

for (let i = 2; i < process.argv.length; i++) {
	if (process.argv[i].startsWith('--filter=')) {
		filter = process.argv[i].split('=')[1];
	}

	if (process.argv[i] === '--count') {
		count = true;
	}
}

if (filter != '') {
	data = searchAnimals(data, filter);
}

if (count) {
	data = countAnimals(data);
}

if (data.length > 0) {
	console.log(JSON.stringify(data, null, 2));
}