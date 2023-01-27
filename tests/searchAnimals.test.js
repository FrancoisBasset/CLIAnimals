const assert = require('assert');
const { describe, it, beforeEach } = require('mocha');

const { searchAnimals } = require('../functions');
let source_data = JSON.stringify(require('../data').data);

describe('searchAnimals', function() {
	it('When searching \'azertyuiop\', result size should be 0', function() {
		const data = JSON.parse(source_data);
		const result = searchAnimals(data, 'azertyuiop');

		assert.deepEqual(result, []);
		assert.equal(result.length, 0);
	});

	['ry', 'Duck', 'ea'].forEach(filter => {
		let data;
		let result;

		beforeEach(function() {
			data = JSON.parse(source_data);
			result = searchAnimals(data, filter);
		});

		it(`When searching '${filter}', result size if bigger than 0`, function() {
			assert.ok(result.length > 0);
		});

		it(`When searching '${filter}' should all contains '${filter}'`, function() {
			for (const country of result) {
				for (const person of country.people) {
					for (const animal of person.animals) {
						assert.ok(animal.name.includes(filter));
					}
				}
			}
		});
	});
});