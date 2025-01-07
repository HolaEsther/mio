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
const signo = document.getElementById('signo');
const anos = document.getElementById('anos');
const ciudad = document.getElementById('ciudad');
const deporte = document.getElementById('deporte');

cajaNombres.addEventListener('change', function() { 
    const nombresEquivalencias = equivalencias(this.value); // Cambiado 'textContent' a 'value' referente a opciones del selector
    
    signo.innerText = "Signo: " + nombresEquivalencias.susigno;
    anos.innerText = "Años: " + nombresEquivalencias.suanos;
    ciudad.innerText = "Ciudad: " + nombresEquivalencias.suciudad;
    deporte.innerText = "Deporte: " + nombresEquivalencias.sudeporte;
});

function equivalencias(aquiVariableNueva){  
    const equivalencias = {
        'Pedro': pedro,
        'María': maria, // Corrigiendo el valor aquí, asegurando que tenga acento
        'Luis': luis
    };

    return equivalencias[aquiVariableNueva]; // Ahora retorna el objeto correspondiente, usando el nombre correcto
}