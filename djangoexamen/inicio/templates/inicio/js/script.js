
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validar los campos (puedes agregar tus propias validaciones aquí)

  // Enviar los datos al servidor (aquí puedes hacer una solicitud AJAX para enviar los datos a tu backend)

  // Mostrar un mensaje de éxito o redireccionar al usuario a otra página
  alert("Registro exitoso");
});
