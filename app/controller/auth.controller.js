const db = require('../config/db.config.js');
const User = db.user;
const Profile = db.profile;

exports.findAll = (req, res) => {
	User.findAll({
		attributes: ['id', 'username', 'email'],
		include: [{
			model: Profile,
			where: {id: db.Sequelize.col('user.profileId')},
			attributes: ['firstname', 'lastname', 'gender']
		}]
	}).then(users => {
		res.send(users);
	});
};

exports.login = (req, res) => {
	User.findOne({
		attributes: ['id', 'username', 'email', 'password'],
		where: {
			id: req.params.userid
		},
		include: [{
			model: Profile,
			where: {id: db.Sequelize.col('user.profileId')},
			attributes: ['firstname', 'lastname', 'gender']
		}]
	}).then(users =>{
		res.send(users);
	})
};

exports.register = (req, res) => {
	var users;
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const gender = req.body.gender;

	User.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password

	}).then((user) =>{
		users = user;

		return Profile.create({
			firstname: firstname,
			lastname: lastname,
			gender: gender
		})
	}).then((profile) =>{
		users.setProfile(profile);

		res.send(users);
	})
};