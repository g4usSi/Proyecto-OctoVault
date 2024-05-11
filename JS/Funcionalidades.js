/*Funciones*/
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetSectionId = this.getAttribute('href'); // Obtiene el ID de la sección
    const targetSection = document.querySelector(targetSectionId); // Obtiene la referencia a la sección
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  });
});

/*Leonor - Trama/Sinopsis*/

/*Leonor - Historia*/

/*Jenny - Estetica*/

/*Mily - Personajes*/

/*Daniel - Impacto Cultural*/

/*Geo - Curiosidades y Teorias*/

/*Miguel - Memes*/

/*Extra-testing*/