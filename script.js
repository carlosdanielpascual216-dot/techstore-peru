// Función interactiva para cambiar de sección dinámicamente sin recargar la página
function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar únicamente la sección seleccionada
    const seccionActiva = document.getElementById('seccion-' + idSeccion);
    if (seccionActiva) {
        seccionActiva.style.display = 'block';
    }
}

// Control del Modal del Botón Flotante
const floatingBtn = document.getElementById('floatingBtn');
const infoModal = document.getElementById('infoModal');
const closeModal = document.getElementById('closeModal');
const btnPromocion = document.getElementById('btn-promocion');

floatingBtn.addEventListener('click', () => {
    infoModal.style.display = 'flex';
});

btnPromocion.addEventListener('click', () => {
    alert('¡Aprovecha un 15% de descuento pagando con Yape o Plin usando el código: PERUTECH15!');
});

closeModal.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
});