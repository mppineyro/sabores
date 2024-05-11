document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const formulario = document.getElementById("formulario");

    // Agrega un evento de escucha para el evento "submit"
    formulario.addEventListener("submit", function(event) {
        // Evita que se envíe el formulario por defecto
        event.preventDefault();

        const regexNombre = /^[a-zA-Z]+$/
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
            ? formato(selector = "nombre", nombreInput.value = "El nombre no es válido")
            : formato()
        // //Validación Teléfono
        const validarTelefono = (!regexTelefono.test(telefonoValor))
            ? formato(selector = "telefono", telefonoInput.value = "Por favor revise el número de teléfono")
            : formato()
        // // Validación E-mail
        const validarEmail = (!regexEmail.test(emailValor))
            ? formato(selector = "email", emailInput.value = "Por favor revise el número de teléfono")
            : formato()

  
        // else{
        //     //to do: definir que hacemos cuando es valido
        //     console.log("Mensaje " + mensajeValor)
        //     mensajeInput.style.borderColor = ""
        //     mensajeInput.style.color = "" 
        //     //return;
        // }
        function formato(selector, mensaje) {
            document.querySelector('#' + selector).style.borderColor = "red";
            document.querySelector('#' + selector).style.color = "red" 
            document.querySelector('#' + selector).value = mensaje;
            document.querySelector('#' + selector).focus();
            return
        }
    })
})
