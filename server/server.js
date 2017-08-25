const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const public = path.join(__dirname, "../public");

const app = express();
const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
	console.log("User connected to server");

	socket.on("disconnect", () => {
		console.log("User was disconnected from server");
	});
});

app.use(express.static(public));

server.listen(port, () => {
	console.log(`Running on port ${port}...`);
})