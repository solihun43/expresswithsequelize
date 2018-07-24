module.exports = (req, res, next) => {
	console.log("passing middleware");
	next();
}