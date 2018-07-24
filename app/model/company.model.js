module.exports = (sequelize, Sequelize) => {
	const Company = sequelize.define('company', {
		id: {
			type: Sequelize.INTEGER(11),
			primaryKey: true,
			autoIncrement: true
		},
		name: { 
			type: Sequelize.STRING 
		},
		street: { 
			type: Sequelize.STRING 
		},
		phone: { 
			type: Sequelize.STRING 
		}
	});

	return Company;
}