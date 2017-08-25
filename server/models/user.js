'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
})
const User = mongoose.model('User', UserSchema)
