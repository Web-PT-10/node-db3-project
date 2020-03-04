const db = require('../data/config');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	//Finds schemes by id
	return db('schemes').where('id', id);
}

function findSteps(id) {
	//Finds steps by Id
}

function add(scheme) {
	//adds a new scheme
}

function update(changes, id) {
	//updates current schemes etc.
}

function remove(id) {
	//removes a particular resource
}
