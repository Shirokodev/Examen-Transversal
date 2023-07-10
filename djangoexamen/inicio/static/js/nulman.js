$(document).ready(function() {
    // Objeto que define respuestas predefinidas para ciertas palabras clave
    var predefinedAnswers = {
        "hola": "Hola! ¿Cómo estás?",
        "adiós": "Adiós! Que tengas un buen día",
        "gracias": "De nada! ¿En qué más puedo ayudarte?"
    };

    // Función que agrega un mensaje al contenedor del chat
    function addChatMessage(sender, message) {
        var messageElement = $('<div class="chat-message"></div>');
        messageElement.text(sender + ": " + message);
        $('#chat-container').append(messageElement);
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
        } else {
            // Si no hay una respuesta predefinida, agregar un mensaje genérico
            addChatMessage("Chatbot", "Lo siento, no entiendo lo que quieres decir.");
        }

        // Limpiar el campo de entrada
        $('#user-input').val("");
    });
});
