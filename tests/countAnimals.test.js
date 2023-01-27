const assert = require('assert');
const { describe, it, beforeEach } = require('mocha');

const { searchAnimals, countAnimals } = require('../functions');
let source_data = JSON.stringify(require('../data').data);

describe('countAnimals', function() {
	it('When counting with no filter, it should not impact the length', function() {
		const data = JSON.parse(source_data);
		const result = countAnimals(data);

		assert.equal(result.length, data.length);
	});
	
	it('When counting with no filter, result size should be correct', function() {
		const data = JSON.parse(source_data);
		const result = countAnimals(data);
		
		const expected = ['Dillauti [5]', 'Tohabdal [8]', 'Uzuzozne [7]', 'Zuhackog [7]', 'Satanwi [5]'];
		
		result.forEach((country, i) => {
			assert.equal(country.name, expected[i]);
		});
	});

	[
		['ry',  ['Uzuzozne [1]', 'Lillie Abbott [1]', 'Satanwi [1]', 'Anthony Bruno [1]']],
		['fish',  ['Tohabdal [2]', 'Essie Bennett [1]', 'Curtis Fuchs [1]', 'Zuhackog [1]', 'Lawrence Camiciottoli [1]', ]]
	].forEach(([filter, results]) => {
		let data;
		let result;

		beforeEach(function() {
			data = JSON.parse(source_data);
			result = searchAnimals(data, filter);
			result = countAnimals(result);
		});

		it(`When searching '${filter}' should contains '${results}'`, function() {
			let i = 0;
			
			for (const country of result) {
				assert.equal(country.name, results[i]);
				i++;
				for (const person of country.people) {
					assert.equal(person.name, results[i]);
					i++;
				}
			}
		});
	});
});