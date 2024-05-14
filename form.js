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
        if (nombreValor === "") { // Si está vacío
            nombreInput.style.borderColor = "red";
            nombreInput.style.color = "red" 
            nombreInput.value = "El nombre es requerido"
            nombreInput.focus();
        }
        else if(!regexNombre.test(nombreValor)){ //Si es número
            nombreInput.style.borderColor = "red";
            nombreInput.style.color = "red" 
            nombreInput.value = "El nombre no puede contener números"
            nombreInput.focus();
        }
        else {
            nombreInput.style.borderColor = "";
            nombreInput.style.color = "" 
            
            console.log("Nombre valido: " + nombreValor)
        }

        //Validación Teléfono
        if (regexTelefono.test(telefonoValor)) {
            console.log("Número válido: " + telefonoValor);
            telefonoInput.style.borderColor = "" 
            telefonoInput.style.color = "" 

        } else {
            telefonoInput.style.borderColor = "red";
            telefonoInput.style.color = "red" 
            telefonoInput.value = "Por favor revise el número de teléfono"
            telefonoInput.focus();
            console.log(telefonoValor)
        }

        // Validación E-mail
        if (regexEmail.test(emailValor)) {
            console.log("Email válido: " + emailValor)
            emailInput.style.borderColor = "" 
            emailInput.style.color = "" 
        }
        else if(emailValor === ""){
            emailInput.style.borderColor = "red";
            emailInput.style.color = "red" 
            emailInput.value = "El correo es requerido"
            emailInput.focus();
            console.log(emailValor)
        }
        else {
            emailInput.style.borderColor = "red";
            emailInput.style.color = "red" 
            emailInput.value = "Formato de correo invalido"
            emailInput.focus();
            console.log(emailValor)
        }

        if (mensajeValor === "") {
            mensajeInput.style.borderColor = "red";
            mensajeInput.style.color = "red" 
            mensajeInput.value="Un mensaje es requerido";
            mensajeInput.focus();
            console.log(mensajeValor)
        }
        else{
            console.log("Mensaje " + mensajeValor)
            mensajeInput.style.borderColor = ""
            mensajeInput.style.color = "" 
        }

        // Validación para el checkbox de términos y condiciones
        const terminosCheckbox = document.querySelector('#terminos input[type="checkbox"]');
        const labelTerminos = document.querySelector('label[for="terminos"]');
        
        if (!terminosCheckbox.checked) {
            labelTerminos.style.color = "red";
            labelTerminos.textContent = "Es obligatorio aceptar los términos y condiciones";
            return;
        } else {
            labelTerminos.style.color = "";
            labelTerminos.textContent = "Acepto términos y condiciones"; 
            console.log("Términos aceptados")
        }
    })
})