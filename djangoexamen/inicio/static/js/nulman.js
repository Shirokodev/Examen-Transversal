// Objeto que define respuestas predefinidas para ciertas palabras clave
var predefinedAnswers = {
    "hola": "Hola! ¿Cómo estás?",
    "adios": "Adiós! Que tengas un buen día",
    "gracias": "De nada! ¿En qué más puedo ayudarte?"
};

// Función que agrega un mensaje al contenedor del chat
function addChatMessage(sender, message) {
    var messageElement = $('<div class="chat-message"></div>');
    messageElement.text(sender + ": " + message);
    $('#chat-container').append(messageElement);
}

// Función que utiliza la API de SpeechSynthesis para hacer que el chatbot hable
function speak(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

// Manejar el evento de clic en el botón "Enviar"
$('#send-button').click(function() {
    // Obtener el mensaje ingresado por el usuario
    var userInput = $('#user-input').val();

    // Agregar el mensaje del usuario al contenedor del chat
    addChatMessage("Usuario", userInput);

    // Procesar el mensaje del usuario
    var response = predefinedAnswers[userInput.toLowerCase()];
    if (response) {
        // Si hay una respuesta predefinida, agregarla al contenedor del chat
        addChatMessage("Chatbot", response);

        // Hacer que el chatbot hable la respuesta
        //speak(response);
    } else {
        // Si no hay una respuesta predefinida, agregar un mensaje genérico
        addChatMessage("Chatbot", "Lo siento, no entiendo lo que quieres decir.");

        // Hacer que el chatbot hable el mensaje genérico
        speak("Lo siento, no entiendo lo que quieres decir.");
    }

    // Limpiar el campo de entrada
    $('#user-input').val("");
});
/*
 // Objeto que define respuestas predefinidas para ciertas palabras clave
        var predefinedAnswers = {
            "hola": "Hola! ¿Cómo estás?",
            "adios": "Adiós! Que tengas un buen día",
            "gracias": "De nada! ¿En qué más puedo ayudarte?"
        };

        // Función que agrega un mensaje al contenedor del chat
        function addChatMessage(sender, message) {
            var messageElement = $('<div class="chat-message"></div>');
            messageElement.text(sender + ": " + message);
            $('#chat-container').append(messageElement);
        }

        // Función que utiliza la API de SpeechSynthesis para hacer que el chatbot hable
        function speak(text) {
            var msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
        }

        // Manejar el evento de clic en el botón "Enviar"
        $('#send-button').click(function() {
            // Obtener el mensaje ingresado por el usuario
            var userInput = $('#user-input').val();

            // Agregar el mensaje del usuario al contenedor del chat
            addChatMessage("Usuario", userInput);

            // Procesar el mensaje del usuario
            var response = predefinedAnswers[userInput.toLowerCase()];
            if (response) {
                // Si hay una respuesta predefinida, agregarla al contenedor del chat
                addChatMessage("Chatbot", response);

                // Hacer que el chatbot hable la respuesta
                //speak(response);
            } else {
                // Si no hay una respuesta predefinida, agregar un mensaje genérico
                addChatMessage("Chatbot", "Lo siento, no entiendo lo que quieres decir.");

                // Hacer que el chatbot hable el mensaje genérico
                speak("Lo siento, no entiendo lo que quieres decir.");
            }

            // Limpiar el campo de entrada
            $('#user-input').val("");
        });
*/ 