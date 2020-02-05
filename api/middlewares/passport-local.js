const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/user");

const opts = {
	usernameField: "email"
};

passport.use(
	new LocalStrategy(opts, (email, password, done) => {
		User.findOne({ email }, (err, user) => {
			if (err) {
				return done(err);
			}

			if (!user) {
				return done(null, false);
			}

			if (!bcrypt.compareSync(password, user.password)) {
				return done(null, false);
			}

			done(null, user);
		});
	})
);

const requireSignIn = passport.authenticate("local", { session: false });

module.exports = requireSignIn;
