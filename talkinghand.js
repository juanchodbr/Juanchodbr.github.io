document.addEventListener("DOMContentLoaded", function () {
    // Mostrar barra flotante al hacer scroll
    const barraFlotante = document.querySelector(".barra-flotante");
    const encabezado = document.querySelector(".encabezado");

    // Inicialmente, la barra flotante está oculta
    barraFlotante.style.display = "none";

    window.addEventListener("scroll", function () {
        // Verificar si el scroll ha pasado el encabezado
        if (window.scrollY > encabezado.offsetHeight) {
            barraFlotante.style.display = "flex";
        } else {
            barraFlotante.style.display = "none";
        }
    });

    // Mostrar/Ocultar el menú en dispositivos móviles
    const menuIcono = document.getElementById("menu-icono");
    const barraLinks = document.getElementById("barra-1");

    menuIcono.addEventListener("click", function () {
        // Alternar la visibilidad de los enlaces
        if (barraLinks.style.display === "flex") {
            barraLinks.style.display = "none";
        } else {
            barraLinks.style.display = "flex";
        }
    });
});

// Seleccionar el ícono de menú y los enlaces de la barra
const menuIcono = document.getElementById('menu-icono');
const menuLinks = document.getElementById('menu-links');

// Añadir evento de click al ícono de hamburguesa
menuIcono.addEventListener('click', function() {
    // Alternar la clase "mostrar" para mostrar u ocultar los enlaces del menú
    menuLinks.classList.toggle('mostrar');
});
