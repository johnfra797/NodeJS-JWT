var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// set up a mongoose model
var UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true, trim: true, required: true },
	password: { type: String, required: true },
	admin: { type: Boolean, required: true }
})

UserSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);