const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
const { secret } = require("../config/jwt");

const opts = {
	jwtFromRequest: ExtractJwt.fromHeader("authorization"),
	secretOrKey: secret
};

passport.use(
	new JwtStrategy(opts, (jwt_payload, done) => {
		User.findById(jwt_payload.sub, (err, user) => {
			if (err) {
				return done(err, false);
			}

			if (!user) {
				return done(null, false);
			}

			done(null, user);
		});
	})
);

const requireToken = passport.authenticate("jwt", { session: false });

module.exports = requireToken;
