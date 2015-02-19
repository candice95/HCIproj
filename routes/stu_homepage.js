// Old code
//exports.view = function(req, res){
//  res.render('stu_homepage')
//};

var models = require('../models');

/*
 * GET student home page.
 */
exports.view = function(req, res){

	models.Appointment
		.find()
		.sort('-date')
		.exec(renderAppointments);

	function renderAppointments(err, allapt) {
		res.render('stu_homepage', { 'allapt': allapt });
	}

};