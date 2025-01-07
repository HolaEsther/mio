
             // EJERCÍCIO  O K


//  OBJETOS para cada FICHA
let arquitecto = { nombre:'Luís', edad:'25 años', ciudad:'Burgos' };
let ingeniero = { nombre:'Telma', edad:'32 años', ciudad:'Ibiza' };
let naturista = { nombre:'Rafaél', edad:'28 años', ciudad:'Madrid' };
let programador = { nombre:'Gema', edad:'22 años', ciudad:'Barcelona' };


//  pasados a VARIABLES los elementos intervinientes
const losNombres=document.getElementById('los-nombres');
const btn=document.getElementById('btn');
const vNombre=document.getElementById('v-nombre');
const vEdad=document.getElementById('v-edad');
const vCiudad=document.getElementById('v-ciudad');


//  EVENTO 
btn.addEventListener('click', function(){

    let asignaciones= Equivalentes();

    vNombre.innerHTML=asignaciones.nombre;
    vEdad.innerHTML=asignaciones.edad;
    vCiudad.innerHTML=asignaciones.ciudad;
});


function Equivalentes(){
    let asignaciones={
        'arquitecto':arquitecto,
        'ingeniero':ingeniero,
        'naturista':naturista,
        'programador':programador
    }
    return asignaciones[losNombres.value];
}