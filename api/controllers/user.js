const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");
const jwt = require("../config/jwt");

router.post("/users/new", (req, res) => {
	const { email, password } = req.body;

	if (!email) {
		return res.send({ email: "Please provide an email address" });
	}

	if (!password) {
		return res.send({ password: "Please provide a password" });
	}

	User.findOne({ email }, (err, user) => {
		if (user) {
			return res.send({ email: "Email is already existed" });
		}

		const newUser = new User({
			email,
			password
		});

		newUser.save(err => {
			if (err) {
				return res.send({ password: "Password can't be lower than 6" });
			}

			res.send({
				token: jwt.sign({
					sub: newUser._id
				})
			});
		});
	});
});

module.exports = router;
