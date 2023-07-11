var predefinedAnswers = {
    "hola": "¡Hola! ¿Cómo estás?",
    "adios": "¡Adiós! Que tengas un buen día",
    "gracias": "¡De nada! ¿En qué más puedo ayudarte?"
};

function addChatMessage(sender, message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = sender + ": " + message;
    document.getElementById('chat-container').appendChild(messageElement);
}

function speak(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}


document.getElementById('send-button').addEventListener('click', function(event) {
    event.preventDefault();
  
    var userInput = document.getElementById('user-input').value;
    addChatMessage("Usuario", userInput);

    var response = predefinedAnswers[userInput.toLowerCase()];
    if (response) {
        addChatMessage("Chatbot", response);
        speak(response);
    } else {
        addChatMessage("Chatbot", "Lo siento, no entiendo lo que quieres decir.");
        speak("Lo siento, no entiendo lo que quieres decir.");
    }

    document.getElementById('user-input').value = "";
});
