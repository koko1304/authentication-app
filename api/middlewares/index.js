const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(cors());
router.use(bodyParser.json({ type: "*/*" }));

module.exports = router;
