$(document).ready(function() 
        { $('#myForm').submit(function(e) {
            e.preventDefault(); // Evita que el formulario se envíe automáticamente
            
            // Obtiene los valores de los campos
            var nombre = $('#nombre').val();
            var empresa = $('#empresa').val();
            var email = $('#email').val();
            var celular = $('#celular').val();
            var asunto = $('#asunto').val();
            var contraseña = $('#new-password').val();
            
            // Verifica si el campo de nombre cumple con las reglas
            if (nombre.length < 3) {
              $('#errorNombre').fadeIn().text('El nombre debe tener al menos 3 caracteres');
              return;
            } else {
                $('#errorNombre').fadeOut();
            }
            
            // Verifica si el campo de empresa cumple con las reglas
            if (empresa.length < 10) {
              $('#errorEmpresa').fadeIn().text('Los apellidos deben tener al menos 10 caracteres');
              return;
            } else {
                $('#errorEmpresa').fadeOut();
            }
            
            // Verifica si el campo de email cumple con las reglas
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
              $('#errorEmail').fadeIn().text('El email debe tener un formato válido');
              return;
            } else{
                $('#errorEmail').fadeOut();
            }
            
            // Verifica si el campo de asunto cumple con las reglas
            if (asunto.length < 6) {
              $('#errorAsunto').fadeIn().text('El nombre de usuario debe tener mínimo 6 caracteres');
              return;
            } else{
                $('#errorAsunto').fadeOut();
            }
            if (contraseña.length < 9) {
              $('#errorcontraseña').fadeIn().text('La contraseña tiene que tener 8 caracteres.');
              return;
            } else{
              $('#errorcontraseña').fadeOut();
            }
            
            // Aquí puedes realizar acciones adicionales si el formulario es válido
            alert('Formulario válido');
            // Por ejemplo, puedes enviar el formulario o realizar otras operaciones
            
          });
        });