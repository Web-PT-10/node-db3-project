const db = require('../data/config');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	//Finds schemes by id
	return db('schemes').where('id', id).first();
}

function findSteps(id) {
	//Finds steps by Id
	return db('steps')
		.join('schemes', 'schemes.id', 'steps.scheme_id')
		.select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
		.where('scheme_id', id);
}

function add(scheme) {
	//adds a new scheme
	return db('schemes').insert(scheme);
}

function addStep(stepData, id) {
	//adds a new step
	return db('steps').update(stepData).where('scheme_id', id);
}

function update(changes, id) {
	//updates current schemes etc.
	return db('schemes').update(changes).where(id);
}

function remove(id) {
	//removes a particular resource
	return db('schemes').where('id', id).del();
}
