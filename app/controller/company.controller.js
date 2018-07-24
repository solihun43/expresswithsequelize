const db = require('../config/db.config.js');
const Company = db.company;
const Product = db.product;

// Init data: Companies & Products
exports.init = (req, res) => {	
	
	// Apple company
	Company.create({ 
		name: 'Apple', 
		street: 'Cupertino, CA 95014', 
		phone: '1-408-996-1010',
		products: [
			// IPhone 7 
			{
				code: "A-123",
				namabarang: "Iphone7",
				hargabarang: 9000,
				jumlah: 10
			},
			// IPadPro
			{
				code: "A-456",
				namabarang: "IPadPro",
				hargabarang: 9000,
				jumlah: 10
			}
		]
	}, {
		include: [ Product ]
	}).then(() => {		
	
		console.log("-----------> Apple is created");
		
		// Samsung company
		Company.create({ 
			name: 'Samsung', 
			street: 'Seocho District, Seoul, South Korea', 
			phone: '+82-2-2053-3000',
			products: [
				// GalaxyJ7 
				{
					code: "S-012",
					namabarang: "GalaxyJ7",
					hargabarang: 9000,
					jumlah: 10
				},
				// GalaxyTabA
				{
					code: "S-456",
					namabarang: "GalaxyTabA",
					hargabarang: 9000,
					jumlah: 10
				}
			]
		}, {
			include: [ Product ]
		}).then(() => {		
			console.log("-----------> Samsung is created");
		})
	}).then(() => {
		res.send("Done!");
	})
};


exports.create = (req, res) => {
	Company.create({
		name: req.body.name,
		street: req.body.street,
		phone: req.body.phone
	}).then(company => {
		res.send(company);
	});
};

exports.findAll = (req, res) => {
	Company.findAll(
		/*{
		attributes: [['id', 'companyid'], 'name', 'street', 'phone'],
		include: [{
			model: Product,
			where: {fk_companyid: db.Sequelize.col('company.id')},
			attributes: ['code', 'namabarang', 'hargabarang', 'jumlah']
		}]
	}*/
	).then(companies =>{
		res.send(companies);
	});
};

exports.findOne = (req, res) => {
	Company.findOne({
		attributes: ['id', 'name', 'street', 'phone'],
		where: {
			id: req.params.companyid
		},
		include: [{
			model: Product,
			where: {fk_companyid: db.Sequelize.col('company.id')},
			attributes: ['code', 'namabarang', 'hargabarang', 'jumlah']
		}]
	}).then(company =>{

		if(!company){
			res.status(404).json({
				message: "data not found"
			});
		}else{
			res.send(company);
		}
	});
};