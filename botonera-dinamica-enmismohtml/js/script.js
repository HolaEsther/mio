
                            
                            
                            //    !!! NO me funciona tomado del mismo HTML  esos contenidos


//  1º-- OBTENEMOS ELEMENTOS DEL DOM

let enlaces=document.querySelectorAll('a');                             // ciudades enlaces a cliclear
        let ciuB=document.getElementById('ciuB'); 
        let ciuM=document.getElementById('ciuM');
        let ciuP=document.getElementById('ciuP');
        let ciuL=document.getElementById('ciuL');


let contenedor=document.getElementById('contenedor');                   //  contenedor vacío a donde irán los datos de la ciudad clicleada
        let tContenedor=document.querySelectorAll('.tContenedor');
        let stContenedor=document.querySelectorAll('.stContenedor');
        let pContenedor=document.querySelectorAll('.pContenedor');

     

let datosB=document.getElementById('datosB');           // los contenedores de cada ciudad con fichas de sus datos
let datosM=document.getElementById('datosM');
let datosP=document.getElementById('datosP');
let datosL=document.getElementById('datosL');
                                                               
let tDatos=document.querySelectorAll('.tDatos');             // los contenidos fichas datos de cada ciudad
let stDatos=document.querySelectorAll('.stDatos');
let pDatos=document.querySelectorAll('.pDatos');


            // ASOCIAR ENLACE DE CIUDAD CON EL CONTENEDOR DE SUS CONTENIDOS (SOLO continente no elementos de adentro)

       

            //  2º-- AGREGAMOS UN ELEMENTO CLICK A CADA ENLACE

            enlaces.forEach(function(enlace){
                enlace.addEventListener('click',function(){

                        let block=escribir(this.textContent);

                        tContenedor.innerHTML=block.tDatos;   // !!!! Esta parte falla y NO he dado con qué es
                        stContenedor.innerHTML=block.stDatos;
                        pContenedor.innerHTML=block.pDatos;
                });
            })

            function escribir(enlace){
                let block ={                        // asocia la ciudad con el contenedor de su ficha
                        ciuB:contB=[tdatos, stDatos, pDatos],
                        ciuM:contM=[tdatos, stDatos, pDatos],
                        ciuP:contP=[tdatos, stDatos, pDatos],
                        ciuL:contP=[tdatos, stDatos, pDatos]                      
                } 
                return block[enlace]
            }



//////////////////// ARRAYS //////////////////////////////////////

let profesiones=["taxista","neurólogo","explorador"];
profesiones[3]="Informático";
profesiones[0]="piloto";   // AÑADE AL FINAL ESA QUE ESCRIBIMOS
profesiones.pop();   // ELIMINA LA ÚLTIMA  sea cual sea
profesiones.unshift("atleta");  // AÑADE AL PRINCÍPIO ESA QUE ESCRIBIMOS
profesiones.shift();  //  ELIMINA LA PRIMERA sea cual sea

console.log(profesiones);


///////////////// MATRICES ///////////////////////////

let matrizVariados= [ ["tomates","lechugas","cebollas"], [1,2,3], [8.0,2.1,3.2]  ];
console.log(matrizVariados [0][1]);



///////////////// CONSTRUCTORES DE OBJETOS //////// para que construya mism molde de un objeto ///////////////////////
                // *** la inicial de las variables ha de ser una MAYÚSCULA al ser un constructor

function Alumnos(nombre,edad,profesion,nacionalidad,curso){   // este será el molde a reproducir
        this.nombre=nombre;
        this.edad=edad;
        this.profesion=profesion;
        this.nacionalidad=nacionalidad;
        this.curso=curso;
}
let Alumno1=new Alumnos('Pepa',20,'Estudiante','Española','Inglés');  //  esta serán los datos que le vendrán para rellenar ese molde -una ficha
console.log(Alumno1);

let Alumno2=new Alumnos('Peter',30,'Veterinario','Británico','Cocina española');   //  estos serán los siguientes datos que le vendrán para rellenar ese molde -otra ficha-
console.log(Alumno2);


/////////////////////////////////////////////////////////////////////////////////////////////