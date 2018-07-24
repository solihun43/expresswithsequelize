const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
	dialect: env.dialect,
	operatorAliases: false,

	pool: {
		max: env.max,
		min: env.min,
		acquire: env.pool.acquire,
		idle: env.pool.idle
	}
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.company = require('../model/company.model.js')(sequelize, Sequelize);
db.product = require('../model/product.model.js')(sequelize, Sequelize);

db.profile = require('../model/profile.model.js')(sequelize, Sequelize);
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.session = require('../model/session.model.js')(sequelize, Sequelize);

//here we can connect companies and product base on company's id
db.company.hasMany(db.product, {foreignKey: 'fk_companyid', sourceKey: 'id'});
db.product.belongsTo(db.company, {foreignKey: 'fk_companyid', targetkey: 'id'});
db.user.belongsTo(db.profile);
db.profile.hasOne(db.user);

module.exports = db;