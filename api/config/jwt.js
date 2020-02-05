const jwt = require("jsonwebtoken");

module.exports = {
	sign: function(payload) {
		const secret = this.secret;
		const token = jwt.sign(payload, secret);

		return token;
	},
	verify: function(token) {
		const secret = this.secret;
		const payload = jwt.verify(token, secret);

		return payload;
	},
	secret: "aksfashf1213"
};
