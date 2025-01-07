const ulSup = document.querySelector('.ul-sup');

const ulMed = document.querySelectorAll('.ul-med');
const ulInf = document.querySelectorAll('.ul-inf');

const liSup = document.querySelectorAll('.li-sup');
const liMed = document.querySelectorAll('.li-med');
const liInf = document.querySelectorAll('.li-inf');



/*  ---- modo B ))))--- FUNCIONA SE VE ÚNICAMENTE EL UL QUE PERTENCE AL LI QUE SE MOUSEOVER  !! o k !!  */

ulMed.forEach(function(ulM){   // ...( Con el All ->) He de recorrer cada uno de sus elementos antes 
    ulM.style.display = 'none';  // y adentro ya le doy la orden de que NO SE VEA
});
ulInf.forEach(function(ulI){   // ...( Con el All ->) He de recorrer cada uno de sus elementos antes 
    ulI.style.display = 'none';  // y adentro ya le doy la orden de que NO SE VEA
});

for(let i = 0; i < liSup.length; i++){
    liSup[i].addEventListener('mouseover', function(){
        ulMed[i].style.display = 'block';    
        ulMed[i].classList.add('transiciones');  //  PERO NO FUNCIONA 
    });
    liSup[i].addEventListener('mouseout', function(){
        ulMed[i].style.display = 'none';    
    });
}
for(let i = 0; i < liMed.length; i++){
    liMed[i].addEventListener('mouseover', function(){
        ulInf[i].style.display = 'block';    
        ulInf[i].classList.add('transiciones');  //  PERO NO FUNCIONA 
    });
    liMed[i].addEventListener('mouseout', function(){    
        ulInf[i].style.display = 'none';
        
    });
}



/*  ---- modo A ))))--- FUNCIONA PERO SE VEN A LA VEZ TODOS LOS UL EN LUGAR DE SOLO EL QUE PERTENCE AL LI QUE SE MOUSEOVER  !!!!

                                // NO vale dar las ordenes directamente...
ulMed.forEach(function(ulM){   // ...( Con el All ->) He de recorrer cada uno de sus elementos antes 
    ulM.style.display = 'none';  // y adentro ya le doy la orden de que NO SE VEA
});
ulInf.forEach(function(ulI){   // ...( Con el All ->) He de recorrer cada uno de sus elementos antes 
    ulI.style.display = 'none';  // y adentro ya le doy la orden de que NO SE VEA
});

liSup.forEach(function(liS){    // RECORRO esos li superiores para poder aludir a cada uno cuando seguidamente le hagamos sun mosuseover
    liS.addEventListener('mouseover', function(){
        ulMed.forEach(function(ulM){   // He de VOLVER A RECORRER el ul. Ahora para decirle que SE VEA
            ulM.style.display= 'block';            
        });              
    });     
    liS.addEventListener('mouseout', function(){
        ulMed.forEach(function(ulM){   // He de VOLVER A RECORRER el ul. Ahora para decirle que SE VEA
            ulM.style.display= 'none';            
        });              
    }) ;       
});

liMed.forEach(function(liM){
    liM.addEventListener('mouseover', function(){
        ulInf.forEach(function(ulI){
            ulI.style.display='block';
        })
    })
    liM.addEventListener('mouseout', function(){
        ulInf.forEach(function(ulI){
            ulI.style.display='none';
        })
    })
});

*/





///////////////////////////////  ejercício de TEMPLATE para array de elementos DINÁMICOS en el DOM   ///////////////////////////////////////////////////////
/*
const arrayNombres2 =['Perro', 'Gallo', 'Cerdo', 'Mono'] 
const cajonera2 = document.querySelector('#cajonera2'); // al contenedor en el que se incluirá 
const template = document.querySelector('#template'); // el contenedor virtual que sirve de guía en el HTML 
let fragment= '';

arrayNombres2.forEach(function(nombre2){
    fragment += `
      
            <p> ${nombre2} </p>
            <h3> ANIMALES DEL HORÓSCOPO CHINO </h3>
        
     `
    });
    cajonera2.innerHTML=fragment;
    */



///////////////////////////////  ejercício de TEMPLATE   y   con 1 elemento  DINÁMICO en el DOM  ///////////////////////////////////////////////////////
/*
const arrayNombres =['Perro', 'Gallo', 'Cerdo', 'Mono'] 
const cajonera = document.querySelector('#cajonera'); // al contenedor en el que se incluirá 
const template = document.querySelector('#template');  // SOLO la ESTRUCTURA y NO aludimos al contenido de esta aún
const fragment = document.createDocumentFragment();

arrayNombres.forEach(function(nombre){
    
    // 1º  clonar todo lo que contiene el template
    const elclone = template.content.cloneNode(true); 
    // 2º  aludir al elemento dinámico
    elclone.querySelector('p').textContent = nombre;   // Y ya aquí, NO la estrutura, SINO el CONTENIDO
    // 3º  trasvasar ese clon a plataforma eventual, fragment
    fragment.appendChild(elclone);
});
cajonera.appendChild(fragment);   //  y retrasvasar fragment a elemento real contenedor

*/
//:::::::::::::::::::::::::::::




///////////////////////////////  ejercício de TEMPLATE   y   con   2  o  3  elementos    DINÁMICOS en el DOM  ///////////////////////////////////////////////////////

const arrayCiudades =['París', 'Guayaquil', 'Cádiz', 'Milán'];
const arrayAnimales = ['img/perro.png', 'img/gallo.png', 'img/cerdo.png', 'img/mono.png']; 
const arrayNombres =['Perro', 'Gallo', 'Cerdo', 'Mono'] 
const cajonera = document.querySelector('#cajonera'); // al contenedor en el que se incluirá 
const template = document.querySelector('#template'); // el contenedor virtual que sirve de guía en el HTML 
const fragment = document.createDocumentFragment(); // la plataforma trasvasadora del contenido 

arrayAnimales.forEach(function(animal) { 
    const clone = template.content.cloneNode(true); // Clonar el contenido del template 
    clone.querySelector('.imags').setAttribute('src', animal); 
    fragment.appendChild(clone);
 }); 

 arrayNombres.forEach(function(nombre, index) { 
    const clone = fragment.children[index].cloneNode(true); // Clonar el contenido del template <--AQUÍ DIFERENCIA !!!!
    clone.querySelector('p').textContent=nombre; 
    fragment.replaceChild(clone, fragment.children[index]); // <--AQUÍ DIFERENCIA !!!!  Esta línea es la que CONSIGUE que se incluyan 2 elementos dinámicos SIN repetirse el resto de lo que contiene el template
}); 

 arrayCiudades.forEach(function(ciudad, index) { 
    const clone = fragment.children[index].cloneNode(true); // Clonar el contenido del template <--AQUÍ DIFERENCIA !!!!
    clone.querySelector('h4').textContent=ciudad; 
    fragment.replaceChild(clone, fragment.children[index]); // <--AQUÍ DIFERENCIA !!!!  Esta línea es la que CONSIGUE que se incluyan 2 elementos dinámicos SIN repetirse el resto de lo que contiene el template
}); 

cajonera.appendChild(fragment);  //  cada fragment (ya diferenciado) adentro de cajonera



    //  ======================= EVENTOS extra además ===================================

cajonera.addEventListener('click',function(){   // A PARTE YO le doy una transformación con transición si click en contenedor
    this.style.border='5px solid yellow';
    this.style.transition = 'all 2s';
    this.classList.add('pantalla');
});


const animales = cajonera.querySelectorAll('.imags');   // TENGO que hacer del colectivo imágenes una captura en una variable Y NO del array, pues NO está enel DOM
              //   dentro del forEach donde se está clonando el template ( por eso No pongo document.querySelectorAll, SINO cajonera.querySelectorAll )  y no directamente al elemento animal, ya que ES UN STRING y NO un elemento del DOM...

animales.forEach(function(animal){   // ...Y desde ahí hacer el forEach para sacar cada imagen
    animal.addEventListener('click',function(){
        this.style.border='8px solid red';
        this.style.transition = 'all 2s';
        this.classList.add('pantalla2');
    })
});
