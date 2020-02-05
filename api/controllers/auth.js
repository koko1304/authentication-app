const express = require("express");
const router = express.Router();

const jwt = require("../config/jwt");

const requireSignIn = require("../middlewares/passport-local");

router.post("/signin", requireSignIn, (req, res) => {
	res.send({ token: jwt.sign({ sub: req.user._id }) });
});

module.exports = router;
