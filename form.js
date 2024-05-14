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
            //return; 
        }
        else if(!regexNombre.test(nombreValor)){ //Si es número
            nombreInput.style.borderColor = "red";
            nombreInput.style.color = "red" 
            nombreInput.value = "El nombre no puede contener números"
            nombreInput.focus();
            //return;
        }
        else {
            nombreInput.style.borderColor = "";
            nombreInput.style.color = "" 
    
            //to do: definir que hacemos cuando el valor es valido
        }

        //Validación Teléfono
        if (regexTelefono.test(telefonoValor)) {
            //to do: definir que hacemos cuando es valido
            console.log("Número válido");
            console.log(telefonoValor)
            telefonoInput.style.borderColor = "" 
            telefonoInput.style.color = "" 
            //return;

        } else {
            telefonoInput.style.borderColor = "red";
            telefonoInput.style.color = "red" 
            telefonoInput.value = "Por favor revise el número de teléfono"
            telefonoInput.focus();
            console.log(telefonoValor)
            //return;
        }

        // Validación E-mail
        if (regexEmail.test(emailValor)) {
            //to do: definir que hacemos cuando es valido
            console.log("Email válido: " + emailValor)
            emailInput.style.borderColor = "" 
            emailInput.style.color = "" 
            //return;
        }
        else if(emailValor === ""){
            emailInput.style.borderColor = "red";
            emailInput.style.color = "red" 
            emailInput.value = "El correo es requerido"
            emailInput.focus();
            console.log(emailValor)
            //return;
        }
        else {
            emailInput.style.borderColor = "red";
            emailInput.style.color = "red" 
            emailInput.value = "Formato de correo invalido"
            emailInput.focus();
            console.log(emailValor)
            //return;
        }

        if (mensajeValor === "") {
            mensajeInput.style.borderColor = "red";
            mensajeInput.style.color = "red" 
            mensajeInput.value="Un mensaje es requerido";
            mensajeInput.focus();
            console.log(mensajeValor)
            //return;
        }
        else{
            //to do: definir que hacemos cuando es valido
            console.log("Mensaje " + mensajeValor)
            mensajeInput.style.borderColor = ""
            mensajeInput.style.color = "" 
            //return;
        }
    })
})


function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    // Alternar la clase 'active' para el menú hamburguesa y la navegación principal
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
}
