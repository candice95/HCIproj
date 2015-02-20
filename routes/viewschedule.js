var models = require('../models');

/*
 * GET view schedule page.
 */
exports.view = function(req, res){

	models.Appointment
		.find({"type": "Public"})
		.exec(renderAppointments);

	function renderAppointments(err, allapt) {
		res.render('viewschedule', { 'allapt': allapt });
	}
};

exports.addAppointment = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  var newAppointment = new models.Appointment(form_data);

  newAppointment.save(afterSaving);

  function afterSaving(err) {
    if(err){ console.log(err); res.send(500); }
    res.send();
  }
}

exports.joinAppointment = function(req, res) {
  var aptID = req.params.id;

  // find the apt and remove it
  models.Appointment
    .find({ "_id": aptID })
    .update({"owner": "thisuser"})
    .exec(afterUpdating);

  function afterUpdating(err, allapt) {
    if(err) { console.log(err); }
    res.render('viewschedule/#', {'allapt': allapt });
  }
}