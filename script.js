document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Agregar evento de clic a cada botón
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el valor de la pestaña a mostrar
            const tabId = this.getAttribute('data-tab');
            
            // Desactivar todas las pestañas
            document.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Activar la pestaña seleccionada
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});