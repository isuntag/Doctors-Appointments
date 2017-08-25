const users = require('./../controllers/users.js');
const appointments = require('./../controllers/appointments.js');
const path = require('path');
module.exports = function (app) {

	app.post('/api/user/login', users.login);
	app.get('/api/user/check', users.check);
	app.get('/api/user/logout', users.logout);
	app.get('/api/appointments', appointments.getAll);
	app.post('/api/appointments', appointments.add)
	app.delete('/api/appointments/:id', appointments.delete);

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})

};
