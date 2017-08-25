const mongoose = require('mongoose');
const Appointment = mongoose.model('Appointment');
const moment = require('moment');

module.exports = {
	getAll: function(req, res) {
		Appointment.find({}, function(err, appointments) {
			if(err){
				return res.status(400).json(err)
			}
			else{
				return res.json(appointments)
			}
		})
	},
	delete: function(req, res) {
		Appointment.findOneAndRemove({'_id': req.params.id}, function(err, response) {
			if(err) {
				return res.status(402).json(err)
			}
			else{
				return res.json(response)
			}
		})
	},
	add: function(req, res) {
		Appointment.find({'date': req.body.date}, function(err, response) {
			if(err) {
				return res.status(402).json(err)
			}
			else if(response.length > 2){
				return res.status(403).json('Doctor already has three appointments this day. Please select a different day.')
			}
			else{
				Appointment.find({'_userID': req.body._userID, 'date': req.body.date}, function(err, response) {
					if(err) {
						return res.status(402).json(err)
					}
					else if(response.length > 0){
						return res.status(403).json('You already have an appointment scheduled for this day. Please select a different day.')
					}
					else{
						let appointment = new Appointment(req.body);
						appointment.save( err => {
							if(err) {
								console.log(err);
								return res.status(402).json(err);
							}
							else{
								console.log(appointment);
								return res.json(appointment)
							}
						})
					}
				})

			}
			})
	},
}
