exports.view = function(req, res){
  res.render('professorhome')
};

var models = require('../models');

/*
 * GET professor home page.
 */
exports.view = function(req, res){

	models.Appointment
		.find()
		.exec(renderAppointments);

	function renderAppointments(err, allapt) {
		res.render('professorhome', { 'allapt': allapt });
	}

};
