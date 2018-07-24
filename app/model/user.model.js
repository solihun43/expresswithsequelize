module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type : Sequelize.INTEGER(11),
			autoIncrement : true,
			primaryKey : true,
			field : 'id'
		},
		username: {
			type : Sequelize.STRING,
			allowNull : false,
			field : 'username'
		},
		password: {
			type : Sequelize.STRING,
			allowNull : false,
			field : 'password'
		},
		email : {
			type : Sequelize.STRING,
			allowNull : false,
			field : 'email'
		}
	});

	return User;
};