const socket = io();

socket.on("connect", () => {
	console.log("Connected to server.");
});

socket.on("disconnect", () => {
	console.log("Disconnected from server.");
});

socket.on("newMessage", (message) => {
	console.log("New message recieved: ", message);
	const li = jQuery(`<li>${message.from}: ${message.text}</li>`);
	
	jQuery("#messages").append(li);
});

jQuery("#message-form").on("submit", (e) => {
	e.preventDefault();

	socket.emit("createMessage", {
		from: "User",
		text: jQuery("[name=message]").val()
	}, (data) => {
		console.log(data);
	});
})