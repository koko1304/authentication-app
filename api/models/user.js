const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	}
});

userSchema.pre("save", function(next) {
	const hashPassword = bcrypt.hashSync(this.password, 10);

	this.password = hashPassword;
	next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
