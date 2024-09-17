const ws = new WebSocket("ws://localhost:8080");

ws.onopen = function() {
    console.log("Connected to the chat server");
};

ws.onmessage = function(event) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('p');
    message.textContent = event.data;
    chatBox.appendChild(message);
};

document.getElementById('send-btn').onclick = function() {
    const input = document.getElementById('message-input');
    ws.send(input.value);
    input.value = ''; // Clear input field after sending
};
