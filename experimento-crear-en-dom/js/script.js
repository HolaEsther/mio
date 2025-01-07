// CREAR:  h2, h3, p  por cada ciudad                                  


                                                    //    F U N C I O N A   

// 1º--- Creo los elementos con sus id y class mas sus contenidos


                                                        // Dando nombres variable a los elementos participantes
    let ciudades=document.querySelectorAll('.ciudades');
        let madrid=document.getElementById('m');
        let paris=document.getElementById('p');
    let contenedor=document.getElementById('contenedor');

                                                

    let losDatosMadrid=document.createElement('div');     //  CREANDO div contenedores (para eliminar luego de una sola vez)
    losDatosMadrid.classList='losDatosM';
    let losDatosParis=document.createElement('div');     
    losDatosParis.classList='losDatosP';


    let h2Madrid=document.createElement('h2');    // CREANDO todo lo de MADRID
    h2Madrid.classList='titulos';
    h2Madrid.textContent='Madrid es capital';
        let h3Madrid =document.createElement('h3');
        h3Madrid.classList='subtitulos';
        h3Madrid.textContent='Ven a conocer lo que te atraerá';

        let parrMadrid =document.createElement('p');
        parrMadrid.classList='parrafos';
        parrMadrid.textContent='En numerosos textos sagrados antiguos, como en la Biblia, a la divinidad se la asocia con el Yo Soy. Y muchas corrientes conscienciales más recientes';


    let h2Paris=document.createElement('h2');     // CREANDO todo lo de PARÍS
    h2Paris.classList='titulos';
    h2Paris.textContent='París mon amur';
        let h3Paris =document.createElement('h3');
        h3Paris.classList='subtitulos';
        h3Paris.textContent='Ven a conocer los cafés y rincones mas chics';

        let parrParis =document.createElement('p');
        parrParis.classList='parrafos';
        parrParis.textContent='El momento presente tiene la dimensión superficial y la subyacente, y, como estás viendo, tú también las tienes. La superficial tiene que ver con tu yo físico, mental y emocional (con tu coche, que está cambiando todo el rato)';


//////////////////////////////////////////////////////////////////

    
//////////////////////////////////////////////////////////////////
 //  2º--- Si hiciera falta, que hace, los ordeno y encajo

    losDatosMadrid.appendChild(h2Madrid);
    losDatosMadrid.appendChild(h3Madrid);
    losDatosMadrid.appendChild(parrMadrid);

    losDatosParis.appendChild(h2Paris);
    losDatosParis.appendChild(h3Paris);
    losDatosParis.appendChild(parrParis);



// 3º--- Los añado al DOM en donde quiero que aprarezcan y solo luego: a la orden de un click
       
            madrid.addEventListener('click',escribirMadrid);         

            function escribirMadrid(){                            
                losDatosParis.remove();
                contenedor.appendChild(losDatosMadrid);
            };


            paris.addEventListener('click',escribirParis);        

            function escribirParis(){
                losDatosMadrid.remove();
                contenedor.appendChild(losDatosParis);
            };

   