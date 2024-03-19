document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al botón y al modal
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    // Agregar evento clic al botón para mostrar el modal
    openModalBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        modal.show();
    });
});