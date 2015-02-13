var apts = require('../publicapt.json');

exports.view = function(req, res) {
	res.render('makeapt', apts);
};