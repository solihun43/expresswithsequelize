const db = require('../config/db.config.js');
const Product = db.product;

exports.create = (req, res) => {
	Product.create({
		code: req.body.code,
		namabarang: req.body.namabarang,
		hargabarang: req.body.hargabarang,
		jumlah: req.body.jumlah,
		fk_companyid: req.body.companyid
	}).then(product => {
		res.send(product);
	});
};
