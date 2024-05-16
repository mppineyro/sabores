document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const formulario = document.getElementById("formulario");

    // Agrega un evento de escucha para el evento "submit"
    formulario.addEventListener("submit", function(event) {
        // Evita que se envíe el formulario por defecto
        event.preventDefault();

        const regexNombre = /^([A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘]{0}?[A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘\']+[\s])+([A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘]{0}?[A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘\'])+[\s]?([A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘]{0}?[A-Za-zÃÃ‰ÃÃ“ÃšÃ±Ã¡Ã©Ã­Ã³ÃºÃ‘\'])?$/
        const nombreInput = document.getElementById("nombre");
        const nombreValor = nombreInput.value.trim();

        const regexTelefono = /^(?:(?:\+|00)?549?|0)?(?:11|[2368]\d)(?:(?:(?:\d{4})|(?:\d{2}\s\d{2}\s\d{2}\s\d{2})))|([1-9])\d{7}$/;//Valida números de telefono argentinos
        const telefonoInput = document.getElementById("telefono");
        const telefonoValor = telefonoInput.value.trim();

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInput = document.getElementById("email");
        const emailValor = emailInput.value.trim();

        const mensajeInput = document.getElementById("mensaje");
        const mensajeValor = mensajeInput.value.trim();

        //Validaciones de Nombre
        const validarNombre = (!regexNombre.test(nombreValor)) 
            ? formatoError(selector = "nombre", nombreInput.value = "El nombre no es válido")
            : formato(selector = "nombre")
        // //Validación Teléfono
        const validarTelefono = (!regexTelefono.test(telefonoValor))
            ? formatoError(selector = "telefono", telefonoInput.value = "Por favor revise el número de teléfono")
            : formato(selector = "telefono")
        // // Validación E-mail
        const validarEmail = (!regexEmail.test(emailValor))
            ? formatoError(selector = "email", emailInput.value = "Por favor ingrese un email valido")
            : formato(selector = "email")
        // // Validación mensaje

        // Formatos campos
        function formatoError(selector, mensaje) {
            document.querySelector('#' + selector).style.borderColor = "red";
            document.querySelector('#' + selector).style.color = "red" ;
            document.querySelector('#' + selector).value = mensaje;
            document.querySelector('#' + selector).focus();
        }
        function formato(selector) {
            document.querySelector('#' + selector).style.borderColor = "";
            document.querySelector('#' + selector).style.color = "";
                       
        }
        // Validación para el checkbox de términos y condiciones
        const terminosCheckbox = document.querySelector('#terminos input[type="checkbox"]');
        const labelTerminos = document.querySelector('label[for="terminos"]');

        if (!terminosCheckbox.checked) {
            labelTerminos.style.color = "red";
            labelTerminos.textContent = "Es obligatorio aceptar los términos y condiciones";
            
        } else {
            labelTerminos.style.color = "";
            labelTerminos.textContent = "Acepto términos y condiciones";
            console.log("Términos aceptados")
        }
        if (regexNombre.test(nombreValor) && regexTelefono.test(telefonoValor) && regexEmail.test(emailValor) && terminosCheckbox.checked){          
        alert('validacion completa \n' + 'se enviaran los siguientes datos del formulario \n' + 
        `nombre=&${nombreValor}&telefono=&${telefonoValor}&email=&${emailValor}&mensaje=&${mensajeValor}`);                                                          
        }
    })
})
