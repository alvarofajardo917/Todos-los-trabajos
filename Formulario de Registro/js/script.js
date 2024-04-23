$(document).ready(function(){
    // Array para almacenar los estudiantes registrados
    var estudiantes = [];

    // Evento submit del formulario de registro
    $('#registroForm').submit(function(event){
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener valores del formulario
        var ci = $('#ci').val();
        var nombre = $('#nombre').val();
        var fecha = $('#fecha').val();
        var direccion = $('#direccion').val();

        // Crear objeto estudiante
        var estudiante = {
            ci: ci,
            nombre: nombre,
            fecha: fecha,
            direccion: direccion
        };

        // Agregar estudiante al array
        estudiantes.push(estudiante);

        // Limpiar el formulario
        $('#registroForm')[0].reset();

        // Mostrar mensaje de éxito
        alert('Estudiante registrado correctamente');

        // Actualizar la lista de estudiantes
        listarEstudiantes();
    });

    // Función para listar estudiantes
    function listarEstudiantes() {
        var tablaEstudiantes = $('#tablaEstudiantes tbody');
        tablaEstudiantes.empty(); // Limpiar la tabla antes de agregar nuevos estudiantes
        // Iterar sobre el array de estudiantes y agregarlos a la tabla
        $.each(estudiantes, function(index, estudiante) {
            tablaEstudiantes.append('<tr><td>' + estudiante.ci + '</td><td>' + estudiante.nombre + '</td><td>' + estudiante.fecha + '</td><td>' + estudiante.direccion + '</td></tr>');
        });
    }
});
