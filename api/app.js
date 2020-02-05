const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

app.use(require("./middlewares"));
app.use(require("./controllers"));

mongoose.connect("mongodb://localhost:27017/authapp", { useNewUrlParser: true }, err => {
	app.listen(port, () => {
		console.log(`[Server] Server is listening on port: ${port}`);
	});
});
