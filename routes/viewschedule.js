var models = require('../models');

/*
 * GET view schedule page.
 */
exports.view = function(req, res){

	models.Appointment
		.find({"type": "Public"})
    .sort('-date')
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

  models.Appointment.update({ _id: aptID }, { $set: {owner: 'thisuser'}}, afterUpdating)

  function afterUpdating(err) {
    if(err) { console.log(err); }
    res.send();
  }
}