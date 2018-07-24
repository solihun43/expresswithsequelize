module.exports = function(app){
	const companies = require('../controller/company.controller.js');

	app.post('/api/companies', companies.create);
	app.get('/api/companies/init', companies.init);
	app.get('/api/companies/:companyid', companies.findOne);
	app.get('/api/companies', companies.findAll);
}