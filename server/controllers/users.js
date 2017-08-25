const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
	login: function(req, res) {
		User.findOne({'name': req.body.name}, (err, user) => {
		if(err){
			return res.status(400).json(err);
		}
		if(user){
			req.session.user = user;
			return res.json(user);
		}
		else{
			let newUser = new User(req.body);
			newUser.save( err => {
				if(err) {
					return res.status(402).json(err);
				}
				else{
					req.session.user = newUser;
					return res.json(newUser)
				}
			})
		}
		})
	},
	check: function(req, res) {
		if(req.session.user){
			return res.json(req.session.user);
		}
		else{
			return res.status(401).json('User not logged in.');
		}
	},
	logout: function(req, res) {
		req.session.destroy();
		return res.json('bye')
	}
}
