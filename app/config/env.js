//this for locally database
// const env = {
// 	database: 'db_sequelize',
// 	username: 'root',
// 	password: '',
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	}
// };

const env = {
	database: 'db_apiserver',
	username: 'admin12345',
	password: 'admin12345',
	host: 'db4free.net',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};

module.exports = env;