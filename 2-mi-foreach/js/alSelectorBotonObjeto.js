
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
    sudeporte: 'Escalada'
};

const cajaNombres = document.getElementById('cajaNombres');
const boton = document.getElementById('boton');
const signo = document.getElementById('signo');
const anos = document.getElementById('anos');
const ciudad = document.getElementById('ciudad');
const deporte = document.getElementById('deporte');

boton.addEventListener('click', function() {
    const nombresEquivalencias = equivalencias(cajaNombres.value);

    // Actualizando directamente sin if
    signo.innerText = "Signo: " + (nombresEquivalencias.susigno);
    anos.innerText = "Años: " + (nombresEquivalencias.suanos);
    ciudad.innerText = "Ciudad: " + (nombresEquivalencias.suciudad);
    deporte.innerText = "Deporte: " + (nombresEquivalencias.sudeporte);
});

function equivalencias(aquiVariableNueva) {  
    const equivalencias = {
        'Pedro': pedro,
        'Maria': maria,
        'Luis': luis
    };

    return equivalencias[aquiVariableNueva]; // Ahora retorna el objeto correspondiente, usando el nombre correcto
}