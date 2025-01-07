alert('hola')
//:::::::::::::::::::::::::::::::::::----------  A P U N T E S   D O M  -----------:::::::::::::::::::::::::::::::::::://
                              /*  (del canal YouTube:  JuanDavid_Dev)   */

                /*  !!! N O T A :   Pongo en OFF  algunos ejemplos pq NO he incluido estos elementos en el HTML 
                                 (pues me daría error si los dejo en ON )  !!!  */





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   P R E L I M I N A R E S  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


                let elemento;  // establecemos una variable

                        elemento = document.body; //  Saca todo lo que en else documento contiene su body

                        elemento = document.forms; //  Saca todos los formularios del documento
                        elemento = document.forms[1]; //  Saca el 2º formulario del documento
                        //elemento = document.forms[1].id; //  Saca el id del 2º formulario del documento
                        //elemento = document.forms[1].method; //  Saca el método utlilizado en el 2º formulario del documento
                        //elemento = document.forms[1].classList; //  Saca todas las clases usadas en el 2º formulario del documento
                        //elemento = document.forms[1].classList[0]; //  Saca la 1ª clase usada de todas las que tenga ese 2º formulario del documento
                       
                        //elemento = document.links; //  Saca todos los enlaces del documento
                        //elemento = document.links[2]; //  Saca el 3er enlace del documento
                        //elemento = document.links[2].classList; //  Saca todas las clases que tiene el 3er enlace del documento
                        //elemento = document.links[2].className; //  Saca, en forma de string, todas las clases que tenga el 3er enlace del documento

                        elemento = document.images; //  Saca todas las imagenes que tenga el documento
                        elemento = document.images; //  Saca todas las imagenes que tenga el documento

                        elemento = document.scripts; //  Saca todas los scripts que tenga el documento








//////////////////////7///////////   S E L E C C I O N A R   /////////////////////////////////

let prodExt=document.querySelector('#bloque-2 li:nth-child(3)');
console.log(prodExt.innerHTML);  // Me volcará ese texto que contiene la etiqueta 3ª de li
                /*  SIN EMBARGO,  N O  funcionaría con SelectorAll, pues aquí le especificamos al máximo 
                y con All es para grupos de lo que sea  */
                /*:nth-child()   es cuando nos situamos desde los HIJOS */ 

let prodExt2=document.querySelectorAll('#bloque-1 li:nth-child(3)');
console.log(prodExt2.innerHTML); 


let prodExt3=document.querySelectorAll('#bloque-2 ul li');   // Me volcará todas las etiquetas  li
console.log(prodExt3[2].innerHTML);  
/*  SIN EMBARGO,  N O  funcionaría con li:nth-child() desde los mismos hijos que se buscan, SINO pidiéndolo desde los PADRES  */

/* en cambio, si funciona []  situandonos desde los mismos HIJOS y eligiendo adentro de corchetes cuál en su orden */               
                            

let parraf= document.querySelectorAll('p');   //  Selecciona TODOS los p
console.log(parraf[3].innerHTML);            //  Pero le pedimos de todos que nos vuelque solo el contenido HTML de ese 4ª p <-[3]

let parraf2= document.querySelectorAll('p');      //  Selecciona TODOS los p
console.log(parraf2.innerHTML);                   /* Y AUNQUE le pedimos que nos vuelque el contenido HTML de ellos,
                                                      ( debido al All, NO nos lo puede volcar, solo si le especificamos el de uno de ellos) */


let parraf3= document.querySelectorAll('p')[2];   //  Selecciona de TODOS los p, el 3º
console.log(parraf3.innerHTML);      //  y nos vuelca su contenido                    





//////////////////////7///////////   M O D I F I C A R    T E X T O S   /////////////////////////////////

let parraf4= document.querySelectorAll('p')[2].textContent="este 3er párrafo ha sido modificado por mi";   /*  Selecciona de TODOS los p, el 3º  
                                                                                        y a este le MODIFICAMOS SU CONTENIDO por esto otro */
console.log(parraf4.innerHTML);      //  y nos vuelca su contenido editado     




//////////////////////7///////////   M O D I F I C A R   I M Á G E N E S   /////////////////////////////////

let imagenes= document.querySelectorAll('img')[3].src="imgs/leon-blanco.jpg";  /*  Selecciono TODAS la iágenes y de estas apunto solo a la 4ª
                                        y le CAMBIO SU RUTA => para CAMBIAR la IMAGEN del perro que había por la del león  */
console.log(imagenes);       //  y nos vuelca su contenido editado        




                                /////// IMAGEN   D E    F O N D O    /////
let imagFondo= document.querySelector('#bloque-1 #caja-1 #volcado-1').style.backgroundImage="url('imgs/perro1.jpg')";




//////////////////////7///////////    M O D I F I C A R   E S T I L O S   /////////////////////////////////


//////////////////////7///////////   A Ñ A D I R   C L A S E S   /////////////////////////////////
let subtit= document.querySelectorAll('h2')[0];     
subtit.classList.add('subtitulosRojo','subtitulosGrandes');     // AÑADO estas2 clases mas
console.log(subtit.classList);      // saca las clases en forma de lista nodos

//////////////////////7///////////   E L I M I N A R    C L A S E S    ( llamando a las que ya existen en hoja css ) /////////////////////////////////
let subtit3= document.querySelectorAll('h2')[0];
subtit3.classList.remove('subtitulosGrandes');      // ELIMINO una de esas clases
console.log(subtit3);       // saca las clases pero NO en forma de nodos

//////////////////////7///////////   I N C L U I R    E S T I L O S   ( los generamos aquí )/////////////////////////////////
let subtit4= document.querySelectorAll('h2')[0];
console.log(subtit4.style);       // por si quiero averiguar cuantas clases disponibles y como se escriben aquí. Y elijo entre ellas
subtit4.style.border="3px grey solid";
console.log(subtit4);       // aquí ya no es necesario añadir .style, pues no hay consulta sino solo volcado





//////////////////////7///////////   R E M O V E R    E L E M E N T O S   d e l   D O M    /////////////////////////////////

//  forma  A )--
/*let parraf1 = document.querySelector('p').remove();         // Aquí le aludo a ese 1º p y le digo que lo elimine
console.log(parraf1);*/


//  forma  B )--
/*let parraf1 = document.querySelectorAll('p')[2].remove();    // Aquí le aludo a ese 3 er p de entre todos y le digo que lo elimine
console.log(parraf1);*/


//  forma  C )--  desde EL PADRE aludo al hijo

/* let ficha1 = document.querySelector('#bloque-1').ficha1.removeChild(ficha1.children[1]);   // Aquí aludo al que le contiene, para desde este eliminar la ficha del perro 2º
console.log(parraf1.children);  */



//////////////////////7///////////   C R E A R   y   A G R E G A R   e l e m e n t o s   d e l   D O M    /////////////////////////////////

let nuevoDiv = document.createElement('div');
            nuevoDiv.id='bloque-nuevo';
            nuevoDiv.classList='bloques';

            

let padreyDivs = document.querySelector('.papas'); // una variable para el padre PERO vamos a hacer otra con la ruta padre hijos para colocar el nuevo ...
    
let  padreD = document.querySelectorAll('.papas .bloques')[0];  // ...y es aquí donde le indicamos el lugar dentro del padre y en relación a los otrs hijos de este
//padredeDivs.appendChild(nuevoDiv);
padreD.appendChild(nuevoDiv);  // y aquí con llamarle nos los vuelca, incl. el nuevo creado


let nuevoPa = document.createElement('p');
            nuevoPa.classList='subtitulosRojo';
            nuevoPa.textContent='spspspspsp pspspspsps spspspsps';    

            nuevoPa.addEventListener('click',function(){      //************ Podemos  C R E A R   F U N C I O N E S ********* */
                    alert("HOLA");
            })

    nuevoDiv.appendChild(nuevoPa); 


  //  padreyDivs.insertBefore(nuevoDiv, padreyDivs.children[0]);   // OTRA MANERA:  en el padre inserta antes ese elemento en la posición del hijo 2ª



  // *******************************************************************************************************
// *******************************************************************************************************





// ********************************   MÉTODO   F O R E A C H   *****************************************************************


const participantes =[               // un arreglo (un array)
        {nombre:'Paul', edad:26, profesión:'ingeniero naval'},
        {nombre:'Laura', edad:22, profesión:'odontólogo'},
        {nombre:'Noemi', edad:28, profesión:'ingeniero minas'},
        {nombre:'Carl', edad:28, profesión:'quiropráctica'}
]
console.table(participantes);         // Nos lo saca en formato TABLA en la consola (en vez de  console.log)

participantes.forEach(function (participante){      /* de todos los participantes (en PLURAL) VA  entre paréntesis -con inventado nombre- A CADA, elemento (-aunque inventado nombre, en SINGULAR suele ponerse-)
                                                         a hacer lo siguiente adentro de la función */
         console.log(participante.profesión);     // Pedimos una vez recorrido UNO A UNO, nos vuelque solo las profesiones de todo ese array
});



// ***************************    MÉTODO  M A P ->  es IGUAL (solo sustituyendo esa palabra) a forEach solo que crea un NUEVO arreglo *****************************************************************

const participantes2 =[               // un arreglo (un array)
        {nombre:'Paul', edad:26, profesión:'ingeniero naval'},
        {nombre:'Laura', edad:22, profesión:'odontólogo'},
        {nombre:'Noemi', edad:28, profesión:'ingeniero minas'},
        {nombre:'Carl', edad:28, profesión:'quiropráctica'}
]
console.table(participantes2);           // Nos lo saca en formato TABLA 

participantes2.map(function (participante2){      // de tods (en PLURAL, entre paréntesis, inventado nombre va a cada elemento -en SINGULAR-) a hacer lo sieguiente adentro de la función
        console.log(participante2.nombre);     // Pedimos una vez recorrido UNO A UNO, nos vuelque solo los nombres
});






// *******************************************************************************************************************
// *******************************************************************************************************************
// ****************    F U N C I O N E S  formas de crearlas   *************************************************************************

//  manera  A: -->  funciona tanto si se la llama antes de crearla como después
                function multiplicacion(){
                console.log(5*5);
                };
                multiplicacion();               // invocamos a la función por el nombre que le hemos dado

//  manera  B: -->  funciona solo si se la llama DESPUÉS de crearla --> ASIGNAMOS a FUNCIÓN el nombre de una VARIABLE
                const calculando = function(){
                        console.log(5*5);
                }
                calculando();           // aquí la llamada invocatoria es A la VARIABLE que equivale a esa función



////////////////////////    PARÁMETROS y ARGUMENTOS   de las FUNCIONES  ///////////////////////////{}

function nombrar(a){
        console.log('Hola '+a+ ', que pases un estupendo día');
}
nombrar('Esther');      



nombreEdad('Carlos',30, 'Cuenca');      //  es EL ORDEN, y no como llame a esos PARÁMETROS de la función, lo que pasará el dato a la misma
function nombreEdad(n,a,c){
        console.log('Se llama '+n+' tiene '+a+' años'+' y vive en '+c);
}

/////////////////////////   ENCADENANDO  FUNCIONES  /////////////////////////////
function logueado(){
        console.log('Te has logado correctamente');
        usu('Jorge');  //  ADENTRO de esta llamamos a la otra, y ya con un ARGUMENTO (p. ej., el que nos haya pasado el usuario )
}
logueado();

function usu(usuario){
        console.log(' Bien venido, '+usuario);
};


////////////////////////////   RETORNAR   el   RESULTADO  interviniendo EN OTRA  función  /////////////////////////////////////////////////////

function uno(a,b){  
        // aquí 2 PARÁMETROS
        return (a+b);    // NO hemos puesto un  console.log pues queremos hacer algo con ese resultado y no solo verlo por consola
};
let resultado = uno(3,7);  // y aquí ya 2 ARGUMENTOS para reemplazar a eso parámetros. ASIGNAMOS VALOR RETORNADO a una VARIABLE
console.log(resultado); // Lo vemos en consola, además



function dos(c,d){  
        return c*d;  
}        
let result=dos(resultado,4);  // llamamos a el rsultado de la función annterior por medio de la variable a la que se le asignó
console.log(result); 


//////////////////////////////////////////////////////////////////////////77
///////   De esta OTRA MANAERA SIN return --> ha de darse orden de sacar por consola ADENTRO de la función JUTO A la orden de la EJECUCIÓN


function tres(n,k){  
      
      console.log(n+k);    
};
let resultado3 = tres(5,9);  

///////////////////////////////////////////////////////////////////////////////




//>>>>>>>>>>>>>>>>>>>>>>>   un ejercício mío  de RETORNAR resultado de una función y UTILIZARLO en otra función    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function nombreF (a,b){
        return a*b;
};
let volcado = nombreF(3,5);    // en la 2º parte del igual de esta equivalencia SE CONTIENE EL RESULTADO de esa operación pq incluimos la palabra reservada  RETURN


function nombreF2 (c,d){
        return c+d;
};
let volcado2 = nombreF2 (volcado,2);    // volcado es el nombre variable asignada al retorno resultado de la función anterior
console.log(volcado2);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>








/////////////////////////////////      O B J E T O S     /////////////////////////////////////////////////////////////
                         //     NOMBRE :  SU VALOR   (este valor puede ser una variable, una función, un string, un número, otro objeto....)

objeto={

        nombreFunc:function(){          // el NOMBRE es nombreFunc   y   el VALOR  es function()... 
                console.log('Estoy probando con función dentro de objeto');
        }
}
objeto.nombreFunc();



//__________ Incluyendole parámetro_____
objeto2={

        nombreFunc:function(parametro){
                console.log('Estoy probando con función dentro de objeto '+parametro);
        }
}
objeto2.nombreFunc(25);  //  25 es el atributo Y corresponde al parámetro único de arriba que obligadamente ha de repetirse adentro de la función



//__________ Incluyendole A ESE OBJETO además otra función pero EXTERNA_____
objeto2={
        nombreFunc:function(){
                console.log('Estoy probando con función dentro de objeto ');
        }
}
objeto2.otraF=function(fin){
        console.log('Encadenada otra función al objeto, pero de manera externa.'+ fin);
};

objeto2.otraF(' Y final');   // Y le tenemos, igualmente, que INVOCAR a esa función PERO ASOCIADA A ese nombre de objeto, pq está adentro de ese objeto;

