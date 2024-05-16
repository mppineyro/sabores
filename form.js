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

        const valorRadio = document.querySelectorAll('input[type="radio"]');
        const valorSelect = document.getElementById("horario");

        const terminosCheckbox = document.getElementById('checkbox-terminos');
        
        
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

        // Seleccion Radio
        let radio_Valor = "";
        function radioValor (){
        valorRadio.forEach(valor => {
            if (valor.checked) { 
                radio_Valor = valor.value; 
            }
        });
        }
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
        // Validación del formulario
        
        if (regexNombre.test(nombreValor) && regexTelefono.test(telefonoValor) && regexEmail.test(emailValor) && terminosCheckbox.checked){          
            radioValor();
            alert('Validación completa\n' +
                'Se enviarán los siguientes datos del formulario:\n' +
                `Nombre: ${nombreValor}\n` +
                `Teléfono: ${telefonoValor}\n` +
                `Email: ${emailValor}\n` +
                `Mensaje: ${mensajeValor}\n` +
                `Contacto: ${radio_Valor}\n` +  // Utiliza la variable que almacena el valor del botón de radio
                `Horario: ${valorSelect.value}`);                                                          
        }
    })
})
