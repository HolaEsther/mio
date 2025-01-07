        
/////////////////   para  VALIDAR LOGAMIENTO  //////////////////////////////////////        
function login() { 
    let username = document.getElementById('username').value; 
    let password = document.getElementById('password').value; 
    
    if (username === 'usuario' && password === '123456') {
         alert('Inicio de sesión exitoso'); 
         window.location.href = 'aqui_la_pagina_protegida.html'; 
        } else { alert('Credenciales incorrectas. Intente de nuevo.'); 
    } 
} 
///////////////////////////////////////////////////////


        
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
        
        let arquitecto = { nombre:'Luís', edad:'25 años', ciudad:'Burgos' };
        let ingeniero = { nombre:'Telma', edad:'32 años', ciudad:'Ibiza' };
        let naturista = { nombre:'Rafaél', edad:'28 años', ciudad:'Madrid' };
        let programador = { nombre:'Gema', edad:'22 años', ciudad:'Barcelona' };

        let losNombres = document.getElementById('los-nombres'); 
        let btn = document.getElementById('btn');
        let vNombre = document.getElementById('v-nombre');
        let vEdad = document.getElementById('v-edad');
        let vCiudad = document.getElementById('v-ciudad');

        function relacionar() {
            let correlacionando = {   // OBSERVEMOS QUE no los ponemos en mayúsculas sino como están en los value de cada opcion
                'arquitecto':arquitecto,
                'ingeniero':ingeniero,
                'naturista':naturista,
                'programador':programador
            }
            return correlacionando[losNombres.value];   //  MIRA:  Retorna ese SELECT (q contiene a todas las opciones) pero con el value que se ha seleccionado
        };

        btn.addEventListener('click', function() {
            let correlacionando = relacionar();
            vCiudad.innerHTML = 'La ciudad del seleccionado es: ' + correlacionando.ciudad;
            vEdad.innerHTML = 'La edad es: ' + correlacionando.edad;
            vNombre.innerHTML = 'La edad es: ' + correlacionando.nombre;
        });
//////////////////////////////////////////////////////////////////////////////////77



//    LO MISMO QUE anterior    PERO    NO con select     SINO     con varias h2 para opciones 
                    //  Y aquí hace falta un FOREACH para recorrer los elementos h2   y  no un value (pues era para un selector)

let arquitecto2 = { nombre:'Luís', edad:'25 años', ciudad:'Burgos' };
let ingeniero2 = { nombre:'Telma', edad:'32 años', ciudad:'Ibiza' };
let naturista2 = { nombre:'Rafaél', edad:'28 años', ciudad:'Madrid' };
let programador2 = { nombre:'Gema', edad:'22 años', ciudad:'Barcelona' };


    let losNombres2 = document.querySelectorAll('h2'); 
    let vNombre2 = document.getElementById('v-nombre2');
    let vEdad2 = document.getElementById('v-edad2');
    let vCiudad2 = document.getElementById('v-ciudad2');

    losNombres2.forEach(function(nombre2){
        nombre2.addEventListener('click', function() {
            let correlacionando2 = relacionar2(nombre2);

            vCiudad2.innerHTML = 'La ciudad del seleccionado es: ' + correlacionando2.ciudad;
            vEdad2.innerHTML = 'La edad es: ' + correlacionando2.edad;
            vNombre2.innerHTML = 'El nombre es: ' + correlacionando2.nombre;
        });
    });

    function relacionar2(nombre2) {
        let correlacionando2 = {  
            'ARQUITECTO2': arquitecto2,
            'INGENIERO2': ingeniero2,
            'NATURISTA2': naturista2,
            'PROGRAMADOR2': programador2
        }
        return correlacionando2[nombre2.textContent];  // MIRA:   Retorna ese individual nombre junto a su contenido de texto
    };
///////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
let juan= {
    edad:25,
    profesion:'Medico'
};
let lola={
    edad:22,
    profesion:'Azafata'
} ;
let ana={
    edad:32,
    profesion:'Peluquera'
} ;


let personas=document.querySelectorAll('h2');

let parr1=document.getElementById('parr1');
let parr2=document.getElementById('parr2'); 

personas.forEach(function(persona) {

            persona.addEventListener('click', function() {

                let relaciones=interrelacionar(this.textContent);

                parr1.innerText=relaciones.edad;
                parr2.innerText=relaciones.profesion;
            
            });
});

function interrelacionar(persona) {
    let relaciones={
        'Juan':juan,
        'Lola':lola,
        'Ana':ana
    }
    return relaciones[persona];
};






//////////////////////////////////////////////////////////////////////////

// Definir los enlaces y objetos a relacionar
var enlaces = ['enlace1', 'enlace2', 'enlace3'];
var objetos = ['objeto1', 'objeto2', 'objeto3'];

// Crear un objeto de mapeo
var equivalencias = {};

// Establecer la equivalencia uno a uno
for (var i = 0; i < enlaces.length; i++) {
  equivalencias[enlaces[i]] = objetos[i];
}

// Ejemplo de uso
var enlaceSeleccionado = 'enlace2';
var objetoEquivalente = equivalencias[enlaceSeleccionado];
console.log(objetoEquivalente); // Imprimirá 'objeto2'



//  O K  
/*  AQUÍ:  intenta agregar un evento de click a cada elemento del array zodiaco para crear un nuevo div con borde naranja al ser clickeado. 
   Sin embargo, hay un error si se hace directamente ya que la función addEventListener se intenta aplicar a un string (como 'ARIES') en lugar de un elemento del DOM.  */ 
let caja2 = document.getElementById('caja2'); 
let zodiaco = ['ARIES', 'TAURO', 'GÉMINIS', 'CANCER', 'LEO', 'VIRGO', 'LIBRA', 'ESCORPIO', 'SAGITARIO', 'CAPRICORNO', 'ACUARIO', 'PISCIS'];

zodiaco.forEach(function(signo){      // creamos elementos div para cada signo del zodiaco y agregar el evento de click a dichos elementos
    let signoDiv = document.createElement('div');  // ( pero también pudiera ser un h o un p, la cuestión es tener presncia en HTML con una ETiQUETA)
    signoDiv.textContent = signo;
    signoDiv.style.cursor = 'pointer';
    signoDiv.style.margin = '10px';
     signoDiv.style.width = '30px';
     signoDiv.style.height = '30px';
     signoDiv.style.backgroundColor='pink';

    signoDiv.addEventListener('click', function(){
        let creado = document.createElement('div');        
        creado.style.border = '3px solid blue';
        creado.style.width = '70px';
        creado.style.height = '40px';
        creado.style.margin = '3px';
    
        caja2.appendChild(creado);
    });
    
    caja2.appendChild(signoDiv);  /* ahora se crean elementos div para cada signo del zodiaco, se les añade el evento de click y 
                                     al hacer click en ellos se creará un nuevo div con borde azul  */
 });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 //  O K 
let cajaP=document.getElementById('p-caja');  // al compartimento donde se volcará
let selector=document.getElementById('profesiones'); // el SELECT
let boton=document.getElementById('boton');  // al compartimento donde se volcará

    
     boton.addEventListener('click', function(){

        let seleccion=selector.value;  // CADA VALOR del select PERO ha de estar DENTRO DE lo que está en CHANGE para que lo detecte

        cajaP.innerHTML=seleccion;
     
     });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/*  OK también 
    let pulsar=document.getElementById('pulsar');

        pulsar.addEventListener('click', function() { 

            let cubo=document.getElementById('cubo');       
            cubo.style.backgroundColor='red';

            let cubetes=document.querySelectorAll('.cubetes'); 
            cubetes.forEach(function(cubete) {
                cubete.classList.add('cambios'); 
            }) 
        }) 
*/



/*  OK también *
    let cubo=document.getElementById('cubo');         
    function modificar(){
        cubo.style.backgroundColor='red';

        let cubetes=document.querySelectorAll('.cubetes'); 
        cubetes.forEach(function(cubete) {
            cubete.classList.add('cambios'); 
        })    
    };

    let pulsar=document.getElementById('pulsar');
    pulsar.addEventListener('click', function() { 

        modificar() 
    });
*/




  

     
    // Con este otro código con cada click me escriba de una vez 6 "Hola" -Y- !!! en cambio NO hay tope de cuantas veces pueda ocurrir   
/*
    let pulsar=document.getElementById('pulsar');
    let cubo=document.getElementById('cubo');         
    let cubetes=document.querySelectorAll('.cubetes');  


    for(let i=0; i<3; i++){ 
            pulsar.addEventListener('click', function() { 
                           
                    let nuevoElemento = document.createElement('h3');  // CREA la etiqueta 
                    nuevoElemento.textContent = 'Hola';  // Crea EL CONTENIDO de esa etiqueta
                    cubo.appendChild(nuevoElemento);  //  Le dice dónde va esa etiqueta con su contenido (recién creados)          
            });
        } 
*/



// Y este otro código es para que cada click me escriba UN SOLO "Hola"  -Y- !!! en cambio NO hay tope de cuantas veces pueda ocurrir
/*
    let pulsar=document.getElementById('pulsar');
    let cubo=document.getElementById('cubo');         
    let cubetes=document.querySelectorAll('.cubetes');  


        pulsar.addEventListener('click', function() {
            let nuevoElemento = document.createElement('h3'); 
            nuevoElemento.textContent = 'Hola';
            cubo.appendChild(nuevoElemento); 
        });
*/



//  O K 
let pulsar=document.getElementById('pulsar');
            // Arreglo de URLs de las imágenes
const images = [
    'img/perro.png',
    'img/mono.png',
    'img/cerdo.png',
    'img/dragón.png'
  ];

            // Obtener el div de la galería
  const gallery = document.getElementById('gallery');

  
            // Iterar sobre el arreglo de imágenes y crear elementos de imagen
for (let i = 0; i < images.length; i++) {

     pulsar.addEventListener('click', function() {
        const image = document.createElement('img');
        image.src = images[i];
        image.classList.add('image');
        gallery.appendChild(image);
    });
}
//****************************** 
let caja=document.getElementById('caja');
let cubetes=document.querySelectorAll('.cubetes');

caja.addEventListener('click', function() {
    for (let i = 0; i < cubetes.length; i++) {

        cubetes[3].innerHTML='¡ H e y !';

    }
});



//****************************************** */

//  O K 
let pCaja=document.getElementById('p-caja');
let numeros=[7,20,35,50];
//let i;
let resultados = [];

for (i = 0; i < numeros.length; i++) {
    let triplicar = numeros[i] * 3;
    resultados.push(triplicar);
  };
  console.log(resultados);
  pCaja.innerText = resultados;
//****************************** 


//  O K 
let resultado = [];

function final() {
    numeros.forEach(function(numero) {
        let duplicar = numero * 2;
        resultado.push(duplicar);
    });
    return resultado;
}
pCaja.innerText = final();
//****************************** 


//  O K 
let elresultado = [];

    numeros.forEach(function(numero) {
        let cuatriplicar = numero * 4;
        elresultado.push(cuatriplicar);
    });

    pCaja.innerText = elresultado;
//****************************** 

