module.exports = (app) =>{
	const Auth = require('../controller/auth.controller.js');

	app.post('/api/login/:userid', Auth.login);
	app.get('/api/users', Auth.findAll);
	app.post('/api/register/', Auth.register);
}