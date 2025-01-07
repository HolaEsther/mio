
           // EJERCÍCIO  O K


//  OBJETOS para cada FICHA

let arquitecto = { nombre:'Luís', edad:'25 años', ciudad:'Burgos' };
let ingeniero = { nombre:'Telma', edad:'32 años', ciudad:'Ibiza' };
let naturista = { nombre:'Rafaél', edad:'28 años', ciudad:'Madrid' };
let programador = { nombre:'Gema', edad:'22 años', ciudad:'Barcelona' };


//  pasados a VARIABLES los elementos intervinientes

const profesiones=document.querySelectorAll('h2');
const vNombre=document.getElementById('v-nombre');
const vEdad=document.getElementById('v-edad');
const vCiudad=document.getElementById('v-ciudad');


//    RECORREMOS los elementos

profesiones.forEach(function(profesion){
    profesion.addEventListener('click', function(){

        let asignaciones= Equivalentes(profesion);

        vNombre.innerHTML=asignaciones.nombre;
        vEdad.innerHTML=asignaciones.edad;
        vCiudad.innerHTML=asignaciones.ciudad;
    })
})


function Equivalentes (profesion){
    let asignaciones={
        'ARQUITECTO':arquitecto,
        'INGENIERO':ingeniero,
        'NATURISTA':naturista,
        'PROGRAMADOR':programador
    }
    return asignaciones[profesion.textContent]
}