function alhacerclick() {

    //busca en el DOM el primer elemento que coincida con el selector CSS .menu-toggle y .main-nav

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

/*Esta condición verifica si tanto menuToggle como mainNav son elementos válidos (es decir, si document.querySelector() ha encontrado esos elementos en el DOM).*/

    if (menuToggle && mainNav) {

//Al hacer click sobre el elemento menuToggle, se activa la funcion
        menuToggle.addEventListener('click', function(){
            //la propiedad classList.toggle activa mainNav si visible, lo oculta; y si está oculta, lo muestra
            mainNav.classList.toggle('active');
        });
    }
}

/*Espera a que el DOM (Documento Object Model) del HTML se cargue completamente en el navegador antes de ejecutar la función que se proporciona como segundo argumento.*/

document.addEventListener('DOMContentLoaded',alhacerclick)