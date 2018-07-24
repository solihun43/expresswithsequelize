module.exports = (sequelize, Sequelize) => {
	const Session = sequelize.define('session', {
		id: {
			type : Sequelize.INTEGER(11),
			autoIncrement : true,
			primaryKey : true,
			allowNull : false
		},
		token: {
			type : Sequelize.STRING,
			allowNull : false,
		},
		refreshToken: {
			type : Sequelize.STRING,
			allowNull : false,
			field : 'refresh_token'
		}
	});

	return Session;
};