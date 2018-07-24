const db = require('../config/db.config.js');
const Customer = db.customers;

//post a customer
exports.create = (req, res) =>{
	//save to mysql
	Customer.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		age: req.body.age
	}).then(customer =>{
		res.send(customer);
	});
};

//fetch all customer
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		//send all customer to client
		res.send(customers);
	});
};

//find customer by id
exports.findById = (req, res) => {
	Customer.findById(req.params.customerId).then(customer => {
		//
		res.send(customer);
	});
};

//update customer
exports.update = (req, res) => {
	console.log("update");
	const id = req.params.customerId;
	Customer.update({ firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age}, 
			{where: {id: req.params.customerId}}
		).then(() => {
			res.status(200).send("update succesfully!");
		});
};

//delete customer
exports.delete = (req, res) =>{
	const id = req.params.customerId;
	Customer.destroy({
		where: {id: id}
	}).then(() => {
		res.status(200).send('delete succesfully a customer by id = '+id);
	});
};