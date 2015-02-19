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

}
/*
 * DELETE chosen appointment
 */
exports.deleteApt = function(req, res) {
	var aptID = req.param.id;

	// find the apt and remove it
	models.Appointment
		.find({ "_ic":aptID })
		.remove(deleteCallback);

	function deleteCallback(err) {
		if(err) { console.log(err); }
		res.send("good");
	}
}