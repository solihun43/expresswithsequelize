module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('product', {
		code : { 
			type : Sequelize.STRING 
		},
		namabarang : { 
			type : Sequelize.STRING 
		},
		hargabarang : { 
			type : Sequelize.INTEGER 
		},
		jumlah : { 
			type : Sequelize.INTEGER 
		},
		fk_companyid : {
		 type : Sequelize.INTEGER(11)	
		}
	});

	return Product;
}