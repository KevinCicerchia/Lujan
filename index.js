// Función para cambiar el nombre de la persona asignada a una hora
function changeName(hour) {
    let newName = prompt("Introduce el nuevo nombre para la hora " + hour + ":00 - " + ((hour + 1) % 24) + ":00");
    if (newName) {
        document.getElementById('hour-' + hour).innerText = formatHour(hour) + " - " + formatHour((hour + 1) % 24) + " - " + newName;
    }
}

// Función para formatear la hora
function formatHour(hour) {
    return ("0" + hour).slice(-2) + ":00";
}

// Función para inicializar el carrusel
let currentIndex = 0;
const images = ["lujan.png", "santisimo.png", "santisimo2.png"];
const carouselImage = document.getElementById("carousel-image");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.style.opacity = 0; // Inicia la transición de desvanecimiento
    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.style.opacity = 1; // Termina la transición de desvanecimiento
    }, 500); // Tiempo de la transición de desvanecimiento
}, 3000); // Cambia de imagen cada 3 segundos

// Verificación de carga de imágenes
document.addEventListener("DOMContentLoaded", function() {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.addEventListener('load', () => {
            console.log(`${img.src} cargada correctamente`);
        });
        img.addEventListener('error', () => {
            console.error(`Error al cargar la imagen ${img.src}`);
        });
    });
});
