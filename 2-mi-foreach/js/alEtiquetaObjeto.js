const pedro = {
    susigno: 'Áries',
    suanos: 30,
    suciudad: 'Cádiz',
    sudeporte: 'Surf'
};

const maria = {
    susigno: 'Géminis',
    suanos: 22,
    suciudad: 'Murcia',
    sudeporte: 'Patinaje'
};

const luis = {
    susigno: 'Tauro',
    suanos: 28,
    suciudad: 'Madrid',
    sudeporte: 'Escalada' // Corrige "Esclada" a "Escalada"
};

const clientes = document.querySelectorAll('.clientes');  // cada uno de los cliklables en HTML
const signo = document.getElementById('signo');
const anos = document.getElementById('anos');
const ciudad = document.getElementById('ciudad');
const deporte = document.getElementById('deporte');
const foto = document.getElementById('imagen-volcada');



clientes.forEach(cliente => {
    cliente.addEventListener('click', function() {
        const nombresEquivalencias = equivalencias(this.textContent); 
        
        signo.innerText = 'Signo: ' + nombresEquivalencias.susigno;
        anos.innerText = 'Años: ' + nombresEquivalencias.suanos;
        ciudad.innerText = 'Ciudad: ' + nombresEquivalencias.suciudad;
        deporte.innerText = 'Deporte: ' + nombresEquivalencias.sudeporte;
        // Si deseas agregar una imagen puedes hacerlo aquí
        // foto.src = 'ruta/de/imagen/' + nombresEquivalencias.image; // Asume que cada objeto tiene una propiedad 'image' con la ruta correspondiente
    });
});


function equivalencias(aquiVariableNueva) {
    const nombresEquivalencias = {
        'Pedro': pedro,
        'María': maria,
        'Luis': luis
    };
    return nombresEquivalencias[aquiVariableNueva]; 
}
