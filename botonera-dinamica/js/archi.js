
         //    !!! O. K.  PERO NO he podido importar el ciudades.js. Así que he obturado ese mandato Y he copiado LOS OBJETOS de allí a aquí

/*
import{barcelona, madrid, paris, londres} from './ciudades.js';   */





const barcelona={
    titulo:'Barcelona es bona',
    subtitulo:'Ven a conocer la cosmopolita mediterranea',
    parrafo:'Este discernimiento va instalando el sosiego, la paz y la armonía en la vida y abre las puertas a la experiencia del Yo Soy: más allá del tiempo y el espacio, por encima de todos los cambios que acontecen de instante en instante en la dimensión superficial del momento presente, ¡Yo Soy!... '
}
const madrid={
    titulo:'Madrid es capital',
    subtitulo:'Ven a conocer lo que te atraerá',
    parrafo:'En numerosos textos sagrados antiguos, como en la Biblia, a la divinidad se la asocia con el Yo Soy. Y muchas corrientes conscienciales más recientes han insistido en ello; por ejemplo, Saint Germain. Esto es el Yo Soy: vivo, existo, soy... y tomo plena consciencia de ello. Y Yo Soy ineludiblemente en el aquí-ahora, que, como he indicado anteriormente, es la vida misma. '
}
const paris={
    titulo:'París mon amur',
    subtitulo:'Ven a conocer los cafés y rincones mas chics',
    parrafo:'El momento presente tiene la dimensión superficial y la subyacente, y, como estás viendo, tú también las tienes. La superficial tiene que ver con tu yo físico, mental y emocional (con tu coche, que está cambiando todo el rato) y la subyacente, contigo (con el Conductor que eres, con tu Yo Soy, que nunca cambia).'
}
const londres={
    titulo:'Londres oclock',
    subtitulo:'Ven a conocer la Europa de la reina mas reina',
    parrafo:'La experiencia del Yo Soy consiste en algo tan simple como en darte cuenta de que vives, y de que esto es la clave de tu existencia. A partir de que vives, observas lo que está ahí. Es tu dimensión subyacente, el Yo Soy, lo que observa. Y observas que lo observado lo estás creando tú desde tu observación.'
}



//  1º-- OBTENEMOS ELEMENTOS DEL DOM
    let enlaces=document.querySelectorAll('a');

    let titElemento=document.getElementById('titulo');
    let subtitElemento=document.getElementById('subtitulo');
    let parrafoElemento=document.getElementById('parrafo');


//  2º-- AGREGAMOS UN ELEMENTO CLICK A CADA ENLACE
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(){

                // 2º-1- REMOVEMOS CLASES "active" QUE HUBIERA DE ANTERIOR ELEMENTO
                    enlace.classList.remove('active');
                // 2º-2- AGREGAMOS CLASE "active" AL ENLACE ACTUAL

        // 2º-3- OBTENEMOS EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACE
           
            let contenFunc=obtenerContenido(this.textContent);  /* a esa función de abajo que hace las equivalencias, le asigno una variable para llamarlo, 
                                                                    pues ya se le pidió con return (retornando el valor de la variable que le llegue a ese parámetro) -aquí abajo y volcar contenidos de texto */
            
            titElemento.innerHTML=contenFunc.titulo;           /* a cada nombre de esas variables q se corresponden a sus id de a dónde irán esos TEXTOS se les  hace equivaler 
                                                                        con el nombre de lo que extraen del objeto donde tiene su ficha con todos sus datos */
            subtitElemento.innerHTML=contenFunc.subtitulo;
            parrafoElemento.innerHTML=contenFunc.parrafo;
            
        })  
    }) 


  

     function obtenerContenido(enlace){
        let contenido={     // en forma de OBJETO
            'Barcelona':barcelona,
            'Madrid':madrid,
            'París':paris,
            'Londres':londres
        };
        return contenido[enlace];
    };



    ///////////////////////////////////////77

let array=['PHP','JAVASCRIPT',"CSS"];


