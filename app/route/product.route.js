module.exports = function(app){
	const products = require('../controller/product.controller.js');

	app.post('/api/product', products.create);

}