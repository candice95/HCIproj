var models = require('../models');

/*
 * GET student home page.
 */
exports.view = function(req, res){
	var email = req.cookies.email;

	models.Appointment
		.find({"owner": email})
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
	var aptID = req.params.id;

	// find the apt and remove it
	models.Appointment
		.find({ "_id": aptID })
		.remove(deleteCallback);

	function deleteCallback(err) {
		if(err) { console.log(err); }
		res.send();
	}
}

exports.dropApt = function(req, res) {
	var aptID = req.params.id;
	var email = req.cookies.email;

	models.Appointment.update({ _id: aptID }, { $pull: {'owner': email} }, dropCallback)

	function dropCallback(err) {
		if(err) { console.log(err); }
		res.send();
	}
}