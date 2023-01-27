/**
 * @param {Array} data Data
 * @param {Number} filter Filter
 */
module.exports.searchAnimals = (data, filter) =>
	data.filter(country => {
		country.people = country.people.filter(person => {
			person.animals = person.animals.filter(animal => animal.name.includes(filter));

			return person.animals.length != 0;
		});

		return country.people.length != 0;
	});

/**
 * @param {Array} data Data
 */
module.exports.countAnimals = (data) =>
	data.map(country => {
		country.name += ` [${country.people.length}]`;

		country.people.map(person => {
			person.name += ` [${person.animals.length}]`;
			return person;
		});

		return country;
	});
