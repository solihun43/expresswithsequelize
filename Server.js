var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./app/config/db.config.js');

//force: true will drop the table if already exist
db.sequelize.sync({force: false}).then(() => {
	console.log('drop and resync with { force: false}')
});

//setting middleware
var md = require('./app/middleware/middleware-app.js');
app.use('/api/customers', md);

//route
require('./app/route/customer.route.js')(app);
require('./app/route/company.route.js')(app);
require('./app/route/product.route.js')(app);
require('./app/route/auth.route.js')(app);

//create server
var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("app listening at http://%s:%s", host, port);
});