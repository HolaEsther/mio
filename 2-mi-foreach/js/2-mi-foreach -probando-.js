



/*  ................  O K   F U N C I O N A   tanto trayendo dinámicamente infos como cambiando fondos 
                                                           !!!! PERO  NO me salió dinamicamente estos  ..................    */


//  ¿CÓMO?:  Hago  las fichas en forma de OBJETOS -> para los datos (usando klic a enlaces) -y- una FUNCIÓN para los fondos ( usando klick  a los h3 de los enlaces)




//   ---los  OBJETOS para cada ficha SIGNO---       

        //  para los TEXTOS diversos de cada signo


        const conejo={
            titulo:'Conejo',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const dragon={
            titulo:'Dragón',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const serpiente={
            titulo:'Serpiente',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const caballo={
            titulo:'Caballo',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const cabra={
            titulo:'Cabra',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const mono={
            titulo:'Mono',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const gallo={
            titulo:'Gallo',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const rata={
            titulo:'Rata',
            anos:[1936, 1948, 1960, 1972, 1984, 1996, 2008],
            subtitulo:'Son personas sabias',
            caracteristicas:"A las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía"
        };
        const tigre={
            titulo:'Tigre',
            anos: [1937, 1949, 1961, 1973, 1985, 1997, 2009],
            subtitulo:'Son muy pasionales y llenas de energía',
            caracteristicas:"A las que les gusta rodearse de familiares y amigos, a quienes ayudan en sus quehaceres y problemas diarios. Buenas trabajadoras, ahorradores y buenos administradores de su economía."
        };   
        const buey={
            titulo:'Buey',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'Son pacientes y tranquilos',
            caracteristicas:"Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const perro={
            titulo:'Perro',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        const cerdo={
            titulo:'Cerdo',
            anos:[1938, 1950, 1962, 1974, 1986, 1998, 2010],
            subtitulo:'---Son pacientes y tranquilos',
            caracteristicas:"---Irradian mucho cariño y amor e infunden respeto. Grandes trabajadores, se sienten a gusto rodeados del orden y la limpieza y logran el éxito gracias a su esfuerzo. Para ellos lo más importante es la familia, aunque son celosos con su pareja. Aman el arte y la música. No les gusta discutir, aunque sí que le obedezcan."
        };
        
        
        

//  RECOJO ELEMENTOS en VARIABLES

let signosEnlaces=document.querySelectorAll('a');      

let hsignosEnlaces=document.querySelectorAll('h3');
//let hsignosClick=document.querySelectorAll('h3');
let hSignosClikados=document.querySelectorAll('h3');
                                        

let tituloVolcado=document.getElementById('titulo-volcado');  console.log(tituloVolcado);
let anosVolcado=document.getElementById('anos-volcado');
let subtituloVolcado=document.getElementById('subtitulo-volcado');
let caracteristicasVolcado=document.getElementById('caracteristicas-volcado');


let volcadofondos=document.getElementsByClassName('volcadofondos');
let volcado=document.getElementById('volcado');
let volcadoImagen= document.querySelector('#volcado #volcado-imagen');        console.log('volcadoImagen')
      
let tituloH1 =document.querySelector('h1');

let imagenes= document.querySelectorAll('#volcado #volcadoImagen img');

let imgCreadas= document.querySelectorAll('#volcado #volcadoImagen image');         
let imagenSobre= document.getElementsByClassName('imagenSobre');

let adragon=document.getElementById('adragon');


                        let laImgConejo=document.getElementById('laImgConejo');  
                        let laImgDragon=document.getElementById('laImgDragon');  
                        let laImgSerpiente=document.getElementById('laImgSerpiente');  
                        let laImgCaballo=document.getElementById('laImgCaballo');  
                        let laImgCabra=document.getElementById('laImgCabra');  
                        let laImgMono=document.getElementById('laImgMono');  
                        let laImgGallo=document.getElementById('laImgRGallo');  
                        let laImgRata=document.getElementById('laImgRata');  
                        let laImgTigre=document.getElementById('laImgTigre');  
                        let laImgBuey=document.getElementById('laImgBuey');  
                        let laImgPerro=document.getElementById('laImgCPerro'); 
                        let laImgCerdo=document.getElementById('laImgCerdo');  

        //  ---las IMÁGENES para cada ficha SIGNO---- 


            //  !!!    F U C I O N A   el  DINAMICAMENTE de crear imagen distinta en cada click a enlace (tomados de los id de esos <a> ) !!!

            signosEnlaces.forEach(function(signosEnlace){    
                
                    signosEnlace.addEventListener('click', handleClick);              
                                      
                            function handleClick(event) {    //  SIN pooner la palabra  function adentro del objeto

                                        const eseId = event.target.id;
                                        //const eseTtype = event.type;  // es la ruta para llegar al id del disparador del evento
                                        event.preventDefault();  //  el prevent te sirve para el evitar el comportamiento por defecto de tu enlace       
                                                                       
                                        switch (eseId) {

                                            case 'aconejo':
                                                function creoImgConejo(){     
                                                    let creoImgConejo = document.createElement('img');
                                                    creoImgConejo.src="img/gatos.jpg";
                                                    creoImgConejo.id='laImgRata';
                                                    creoImgConejo.classList='imagenSobre';
                                                    volcadoImagen.appendChild(creoImgConejo);                       
                                                };
                                                creoImgConejo();
                                                break;
                                            case 'adragon':    
                                                function creoImgDragon(){                            
                                                    let creoImgDragon = document.createElement('img');//  CREO una IMAGEN                            
                                                    creoImgDragon.id='laImgDragon';
                                                    creoImgDragon.classList='imagenSobre';
                                                    creoImgDragon.src="img/leon.jpg";
                                                    volcadoImagen.appendChild(creoImgDragon);  //  A SU PADRE le incluyo este hijo  
                                                };
                                                creoImgDragon();
                                                break;
                                            case 'aserpiente':   
                                                function creoImgSerpiente(){
                                                    let creoImgSerpiente = document.createElement('img');
                                                    creoImgSerpiente.src="img/gatos.jpg";
                                                    creoImgSerpiente.id='laImgSerpiente';
                                                    creoImgSerpiente.classList='imagenSobre';
                                                    volcadoImagen.appendChild(creoImgSerpiente); 
                                                };
                                                creoImgSerpiente();
                                                break;
                                            case 'acaballo':
                                                function creoImgCaballo(){
                                                    let creoImgCaballo = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgCaballo.id='laImgCaballo';
                                                    creoImgCaballo.classList='imagenSobre';
                                                    creoImgCaballo.src="img/leon.jpg";
                                                    volcadoImagen.appendChild(creoImgCaballo);  //  A SU PADRE le incluyo este hijo                                             
                                                };
                                                creoImgCaballo();
                                                break;
                                            case 'acabra':
                                                function creoImgCabra(){
                                                    let creoImgCabra = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgCabra.id='laImgCabra';
                                                    creoImgCabra.classList='imagenSobre';
                                                    creoImgCabra.src="img/pies.jpg";
                                                    volcadoImagen.appendChild(creoImgCabra);  //  A SU PADRE le incluyo este hijo  
                                                };
                                                creoImgCabra();
                                                break;
                                            case 'amono':
                                                function creoImgMono(){
                                                    let creoImgMono = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgMono.id='laImgMono';
                                                    creoImgMono.classList='imagenSobre';
                                                    creoImgMono.src="img/leon.jpg";
                                                    volcadoImagen.appendChild(creoImgMono);  //  A SU PADRE le incluyo este hijo  
                                                };
                                                creoImgMono();
                                                break;
                                            case 'agallo':
                                                function creoImgGallo(){   
                                                    let creoImgGallo = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgGallo.id='laImgGallo';
                                                    creoImCGallo.classList='imagenSobre';
                                                    creoImgGallo.src="img/pies.jpg";
                                                    volcadoImagen.appendChild(creoImgGallo);  //  A SU PADRE le incluyo este hijo   
                                                };
                                                creoImgGallo();
                                                break;
                                            case 'arata':
                                                function creoImgRata(){    
                                                    let creoImgRata = document.createElement('img');
                                                    creoImgRata.src="img/gatos.jpg";
                                                    creoImgRata.id='laImgRata';
                                                    creoImgRata.classList='imagenSobre';
                                                    volcadoImagen.appendChild(creoImgRata);        
                                                };
                                                creoImgRata();
                                                break;
                                            case 'atigre':                                                
                                                function creoImgTigre(){
                                                    let creoImgTigre = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgTigre.id='laImgTigre';
                                                    creoImgTigre.classList='imagenSobre';
                                                    creoImgTigre.src="img/leon.jpg";
                                                    volcadoImagen.appendChild(creoImgTigre);  //  A SU PADRE le incluyo este hijo  
                                                };                                                
                                                creoImgTigre();                                           
                                                break;
                                            case 'abuey':                                              
                                                function creoImgBuey(){     
                                                    let creoImgBuey = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgBuey.id='laImgBuey';
                                                    creoImgBuey.classList='imagenSobre';
                                                    creoImgBuey.src="img/pies.jpg";
                                                    volcadoImagen.appendChild(creoImgBuey);  //  A SU PADRE le incluyo este hijo                                                      
                                                };
                                                creoImgBuey();
                                                break;
                                            case 'aperro':
                                                function creoImgPerro(){
                                                    let creoImgPerro = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgPerro.id='laImgPerro';
                                                    creoImgPerro.classList='imagenSobre';
                                                    creoImgPerro.src="img/leon.jpg";
                                                    volcadoImagen.appendChild(creoImgPerro);  //  A SU PADRE le incluyo este hijo  
                                                };
                                                creoImgPerro();
                                                break;
                                             case 'acerdo':
                                                function creoImgCerdo(){
                                                    let creoImgCerdo = document.createElement('img');//  CREO una IMAGEN
                                                    creoImgCerdo.id='laImgCerdo';
                                                    creoImgCerdo.classList='imagenSobre';
                                                    creoImgCerdo.src="img/pies.jpg";
                                                    volcadoImagen.appendChild(creoImgCerdo);  //  A SU PADRE le incluyo este hijo 
                                                }
                                                creoImgCerdo();
                                                break;
                                        };
                        }       

           });

 

           /* switch(eseid){  // es decir, todo el trayecto hasta llegar a trarme cada id al q pertenezca cad click en un <a>
                                
                                case 'aconejo':  //  como le he puesto q se llame cada id (en el HATML)                           
                                    creoImgConejo();          
                                    break;
                                case 'adragon':
                                    creoImgDragon();
                                    break;
                                case 'aserpiente':
                                    creoImgSerpiente();
                                    break;
                                case 'acaballo':
                                    creoImgCaballo();
                                    break;
                                case 'acabra':
                                    creoImgCabra();
                                    break;
                                case 'amono':
                                    creoImgMono();
                                    break;
                                case 'agallo':
                                    creoImgGallo();
                                    break;
                                case 'arata':
                                    creoImgRata();
                                    break;
                                case 'atigre':
                                    creoImgTigre();
                                    break;
                                case 'abuey':
                                    creoImgBuey();
                                    break;
                                case 'abuey':
                                    creoImgPerro();
                                    break;
                                case 'acerdo':
                                    creoImgCerdo();
                                    break;                            
                            };                */   

            /*switch(eseid){  // es decir, todo el trayecto hasta llegar a trarme cada id al q pertenezca cad click en un <a>
                                
                                case 'aconejo':  //  como le he puesto q se llame cada id (en el HATML)                           
                                    creoImgConejo();          
                                    break;
                                case 'adragon':
                                    creoImgDragon();
                                    break;
                                case 'aserpiente':
                                    creoImgSerpiente();
                                    break;
                                case 'acaballo':
                                    creoImgCaballo();
                                    break;
                                case 'acabra':
                                    creoImgCabra();
                                    break;
                                case 'amono':
                                    creoImgMono();
                                    break;
                                case 'agallo':
                                    creoImgGallo();
                                    break;
                                case 'arata':
                                    creoImgRata();
                                    break;
                                case 'atigre':
                                    creoImgTigre();
                                    break;
                                case 'abuey':
                                    creoImgBuey();
                                    break;
                                case 'abuey':
                                    creoImgPerro();
                                    break;
                                case 'acerdo':
                                    creoImgCerdo();
                                    break;                            
                            };                   
            */
    ////////77000000000000000000000000000 LO MISMO ABAJO pero para ELIMINAR LA IMAGEN 0000000000000000000000000000
   /* signosEnlaces.forEach(function(signosEnlace){    

            signosEnlace.addEventListener('dblclick', eliminarI);              
                    
            function eliminarI(event) { 
                const eseid = event.target.id;  // es la ruta para llegar al id del disparador del evento
                event.preventDefault();  //  el prevent te sirve para el evitar el comportamiento por defecto de tu enlace       

                switch(eseid){  // es decir, todo el trayecto hasta llegar a trarme cada id al q pertenezca cad click en un <a>
                    
                    case 'aconejo':  //  como le he puesto q se llame cada id (en el HATML)                           
                        eliminarIConejo();          
                        break;
                    case 'adragon':
                        eliminarIDragon();
                        break;
                    case 'aserpiente':
                        eliminarISerpiente();
                        break;
                    case 'acaballo':
                        eliminarICaballo();
                        break;
                    case 'acabra':
                        eliminarICabra();
                        break;
                    case 'amono':
                        eliminarIMono();
                        break;
                    case 'agallo':
                        eliminarIGallo();
                        break;
                    case 'arata':
                        eliminarIRata();
                        break;
                    case 'atigre':
                        eliminarITigre();
                        break;
                    case 'abuey':
                        eliminarIBuey();
                        break;
                    case 'abuey':
                        eliminarIPerro();
                        break;
                    case 'acerdo':
                        eliminarICerdo();
                        break;                            
                };                
            }    
        });    
   */

           /* signosEnlaces.forEach(function(signosEnlace){    

                signosEnlace.addEventListener('oninput',quitoImagen);     
                                            
                function quitoImagen(event) { 
                    const eseid = event.target.id;  // es la ruta para llegar al id del disparador del evento
                    event.preventDefault();  //  el prevent te sirve para el evitar el comportamiento por defecto de tu enlace       

                    imgCreadas.remove(id)
                }
                
            });   */
            
            
            
            // y las funciones a las que se invoca arriba

                        function creoImgConejo(){     
                            let creoImgConejo = document.createElement('img');
                        creoImgConejo.src="img/gatos.jpg";
                        creoImgConejo.id='laImgRata';
                        creoImgConejo.classList='imagenSobre';
                        volcadoImagen.appendChild(creoImgConejo);                             
                     
                        };
                        function creoImgDragon(){                            
                        let creoImgDragon = document.createElement('img');//  CREO una IMAGEN                            
                        creoImgDragon.id='laImgDragon';
                        creoImgDragon.classList='imagenSobre';
                        creoImgDragon.src="img/leon.jpg";
                        volcadoImagen.appendChild(creoImgDragon);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgSerpiente(){
                            let creoImgSerpiente = document.createElement('img');
                            creoImgSerpiente.src="img/gatos.jpg";
                            creoImgSerpiente.id='laImgSerpiente';
                            creoImgSerpiente.classList='imagenSobre';
                            volcadoImagen.appendChild(creoImgSerpiente); 

                        }
                        function creoImgCaballo(){
                            let creoImgCaballo = document.createElement('img');//  CREO una IMAGEN
                            creoImgCaballo.id='laImgCaballo';
                            creoImgCaballo.classList='imagenSobre';
                            creoImgCaballo.src="img/leon.jpg";
                            volcadoImagen.appendChild(creoImgCaballo);  //  A SU PADRE le incluyo este hijo  
                          
                        }
                        function creoImgCabra(){
                            let creoImgCabra = document.createElement('img');//  CREO una IMAGEN
                            creoImgCabra.id='laImgCabra';
                            creoImgCabra.classList='imagenSobre';
                            creoImgCabra.src="img/pies.jpg";
                            volcadoImagen.appendChild(creoImgCabra);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgMono(){
                            let creoImgMono = document.createElement('img');//  CREO una IMAGEN
                            creoImgMono.id='laImgMono';
                            creoImgMono.classList='imagenSobre';
                            creoImgMono.src="img/leon.jpg";
                            volcadoImagen.appendChild(creoImgMono);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgGallo(){   
                            let creoImgGallo = document.createElement('img');//  CREO una IMAGEN
                            creoImgGallo.id='laImgGallo';
                            creoImCGallo.classList='imagenSobre';
                            creoImgGallo.src="img/pies.jpg";
                            volcadoImagen.appendChild(creoImgGallo);  //  A SU PADRE le incluyo este hijo    

                        }
                        function creoImgRata(){    
                            let creoImgRata = document.createElement('img');
                            creoImgRata.src="img/gatos.jpg";
                            creoImgRata.id='laImgRata';
                            creoImgRata.classList='imagenSobre';
                            volcadoImagen.appendChild(creoImgRata);                                      

                        }
                        function creoImgTigre(){
                            let creoImgTigre = document.createElement('img');//  CREO una IMAGEN
                            creoImgTigre.id='laImgTigre';
                            creoImgTigre.classList='imagenSobre';
                            creoImgTigre.src="img/leon.jpg";
                            volcadoImagen.appendChild(creoImgTigre);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgBuey(){
                            let creoImgBuey = document.createElement('img');//  CREO una IMAGEN
                            creoImgBuey.id='laImgBuey';
                            creoImgBuey.classList='imagenSobre';
                            creoImgBuey.src="img/pies.jpg";
                            volcadoImagen.appendChild(creoImgBuey);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgPerro(){
                            let creoImgPerro = document.createElement('img');//  CREO una IMAGEN
                            creoImgPerro.id='laImgPerro';
                            creoImgPerro.classList='imagenSobre';
                            creoImgPerro.src="img/leon.jpg";
                            volcadoImagen.appendChild(creoImgPerro);  //  A SU PADRE le incluyo este hijo  

                        }
                        function creoImgCerdo(){
                            let creoImgCerdo = document.createElement('img');//  CREO una IMAGEN
                            creoImgCerdo.id='laImgCerdo';
                            creoImgCerdo.classList='imagenSobre';
                            creoImgCerdo.src="img/pies.jpg";
                            volcadoImagen.appendChild(creoImgCerdo);  //  A SU PADRE le incluyo este hijo  

                        }

                        
                        let creada=document.getElementsByClassName('creada');                        
                        let imag=document.querySelector('img');
                                        
                        
        
        
    ////////77000000000000000000000000000 LO MISMO ABAJO pero para ELIMINAR LA IMAGEN 0000000000000000000000000000
        // y las funciones a las que se invoca arriba para ELIMINAR la imagen

               
                    function eliminarIConejo(){                                 
                        laImgConejo.remove();
                    };
                    function eliminarIDragon(){
                        laImgDragon.remove(); 
                    }
                    function eliminarISerpiente(){
                        laImgSerpiente.remove();
                    }
                    function eliminarICaballo(){
                        laImgCaballo.remove();  
                    }
                    function eliminarICabra(){
                        laImgCabra.remove();
                    }
                    function eliminarIMono(){
                        laImgMono.remove();
                    }
                    function eliminarIGallo(){
                        laImgGallo.remove();
                    }
                    function eliminarIRata(){
                        laImgCRata.remove();
                    }
                    function eliminarITigre(){
                        laImgTigre.remove();

                    }
                    function eliminarIBuey(){
                        laImgBuey.remove();
                    }
                    function eliminarIPerro(){
                        laImgPerro.remove();

                    }
                    function eliminarICerdo(){                         
                        laImgCerdo.remove();
                    }

        ////////770000000000000000000000000000000000000000000000000000000






/////////////////´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

        // para FONDOS de cada signo   ---LO DEJO COMENTADO (en OFF) porque NO me salió y USO el método NO dinámico---
        /*
let fondoRata={    
    //fondo: volcado.style.backgroundImage="url('img/gato-yoga.jpg')"   
    fondo: volcado.classList.add('volcadoRata')   
}
let fondoTigre={    
    //fondo: volcado.style.backgroundImage="url('img/perro-jersey.jpg')"  
    fondo: volcado.classList.add('volcadoTigre')    
}
let fondoBuey={
    //fondo: volcado.style.backgroundImage="url('img/perro-blanco.jpg')"  
    fondo: volcado.classList.add('volcadoBuey')   
}
   */





//  HAGO UN RECORRIDO A TODOS LOS ENLACES DE LOS SIGNOS PARA APLICAR LA ATENCIÓN AL QUE SE HAGA CLICK

signosEnlaces.forEach(function(signosEnlace){

    signosEnlace.addEventListener('click',function(){   
                   
            let eslaFunc=equivalencias(this.textContent);   // aquí es donde realmente se reclama a esas quivalencias según el signo clikeado (la función de equivalencias en una nueva variable)
            
            tituloVolcado.innerHTML=eslaFunc.titulo;  
            anosVolcado.innerHTML=eslaFunc.anos;  
            subtituloVolcado.innerHTML=eslaFunc.subtitulo;  
            caracteristicasVolcado.innerHTML=eslaFunc.caracteristicas;      
    });
});





//  HAGO EQUIVALENCIAS entre ELEMENTOS  (enlaces con objetos)

function equivalencias(signosEnlace){    //  de  signos enlace a  signos fichas
    let eslaFunc={
                    'Conejo':conejo,
                    'Dragón':dragon,
                    'Serpiente':serpiente,
                    'Caballo':caballo,
                    'Cabra':cabra,
                    'Mono':mono,
                    'Gallo':gallo,
                    'Rata':rata,
                    'Tigre':tigre,
                    'Buey':buey,    
                    'Perro':perro,
                    'Cerdo':cerdo    
   };
    return eslaFunc[signosEnlace];
};



//  ---LO DEJO COMENTADO (en OFF) porque NO me salió y USO el método NO dinámico---
/*
function equivalenciasFondos(hsignosEnlace){    //  de signos enlace a contenedores FONDOS
    let esteSignoFondos={
                    'Rata':fondoRata,
                    'Tigre':fondoTigre,
                    'Buey':fondoBuey        
   }
    return esteSignoFondos[hsignosEnlace];
}
*/

 //   ---los  -FONDOS-  para cada ficha SIGNO   -- N O  es dinámico PERO es el que me FUNCIONA-- ---   

let h3Rata=document.getElementById('h3rata');
let h3Tigre=document.getElementById('h3tigre');
let h3Buey=document.getElementById('h3buey');

                                                                
            h3Rata.addEventListener('click', function(){                                            
                volcado.style.backgroundImage="url('img/gato-yoga.jpg')" ;
            });
            h3Tigre.addEventListener('click', function(){                                            
                volcado.style.backgroundImage="url('img/perro-jersey.jpg')" ;
            });
            h3Buey.addEventListener('click', function(){                                            
                volcado.style.backgroundImage="url('img/perro-blanco.jpg')"   
            });
                                                                          
                                                        
                                    

