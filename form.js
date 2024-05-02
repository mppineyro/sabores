document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario
    const formulario = document.getElementById("formulario");

    // Agrega un evento de escucha para el evento "submit"
    formulario.addEventListener("submit", function(event) {
        // Evita que se envíe el formulario por defecto
        event.preventDefault();

        const nombreInput = document.getElementById("nombre");
        const telefonoInput = document.getElementById("telefono");
        const emailInput = document.getElementById("email");
        const mensajeInput = document.getElementById("mensaje");
        const nombreValor = nombreInput.value.trim();

        //Validaciones de campos
        if (nombreValor === "") { // Si está vacío
            nombreInput.style.borderColor = "red";
            nombreInput.style.color = "red" 
            nombreInput.value = "El nombre es requerido"
            nombreInput.focus();
            return; 
        }
        else if(!/^[a-zA-Z]+$/.test(nombreValor)){ //Si es número
            nombreInput.style.borderColor = "red";
            nombreInput.style.color = "red" 
            nombreInput.value = "El nombre no puede contener números"
            nombreInput.focus();
        }
        else {
            //to do: definir que hacemos cuando el valor es valido
        }

        // console.log("Nombre:", nombre);
        // console.log("Telefono:", telefono);
        // console.log("Email:", email);
        // console.log("Mensaje:", mensaje);
    })
})