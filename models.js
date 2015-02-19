
var Mongoose = require('mongoose');


var AppointmentSchema = new Mongoose.Schema({
  "date": String,
  "time": String,
  "professor": String,
  "location": String
});

exports.Appointment = Mongoose.model('Appointment', AppointmentSchema);