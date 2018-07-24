module.exports = function(app){

	const customers = require('../controller/customer.controller.js');

	//create a new customer
	app.post('/api/customers', customers.create);

	//Retrieve all customer
	app.get('/api/customers', customers.findAll);

	//retrieve a single customer by id
	app.get('/api/customers/:customerId', customers.findById);

	//update a customer with id
	app.put('/api/customers/:customerId', customers.update);

	//delete a customer with id
	app.delete('/api/customers/:customerId', customers.delete);
}