<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Chat</title>
    <style>
        body {   
            font-family: Arial, sans-serif;
            background: #2fff;
        }
        #chat-box {
            width: 80%;
            height: 400px;
            border: 1px solid #ccc;
            overflow-y: scroll;
            margin: 20px auto;
            padding: 10px;
        }
        #message-input {
            width: 80%;
            padding: 10px;
            margin: 20px auto;
        }
    </style>
</head>
<body>

<h2 style="text-align: center;">Live Chat</h2>
<div id="chat-box"></div>

<input type="text" id="message-input" placeholder="Type your message here..." />
<button id="send-btn">Send</button>

<script src="client.js"></script>
</body>
</html>
