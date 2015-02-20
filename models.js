
var Mongoose = require('mongoose');


var AppointmentSchema = new Mongoose.Schema({
  "date": String,
  "time": String,
  "name": String,
  "email": String,
  "description": String,
  "professor": String,
  "location": String,
  "type": String,
  "owner": String
});

exports.Appointment = Mongoose.model('Appointment', AppointmentSchema);