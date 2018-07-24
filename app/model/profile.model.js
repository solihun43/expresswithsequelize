module.exports = (sequelize, Sequelize) => {
	const Profile = sequelize.define('profile', {
		id: {
			type : Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement : true,
			field: 'id'
		},
		firstname: {
			type : Sequelize.STRING,
			field: 'firstname'
		},
		lastname: {
			type : Sequelize.STRING,
			field: 'lastname'
		},
		gender: {
			type : Sequelize.STRING,
			field: 'gender'
		}
	});

	return Profile;
};