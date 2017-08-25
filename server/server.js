const express = require("express");
const path = require("path");
const public = path.join(__dirname, "../public");

const app = express();

app.use(express.static(public));

app.listen(process.env.PORT, () => {
	console.log(`Running on port ${process.env.ENV}...`);
})