





     
              /*  En este ejercício vamos a manejar (NO imágenes) el CONTENEDOR de las imágenes en bloque ==>
                                         ==>  LOS ANCHOS serán los que nos interesen  */


///////////////////////   para el SLIDER  con DESLIZAMIENTO al pasar las imágenes y textos con manejadores  //////////////////////////////
/*
const slider = document.getElementById('slider'); 

const next = document.getElementById('next'); 
const prev = document.getElementById('prev'); 

let currentPosition = 0;  // es un nombre CUALQUIERA (aunque en ingles es descriptivo) para la variable de la posición inicial





next.addEventListener('click', function() {
    if(currentPosition > -900) {  //   se usa para asegurarse de que el slider no se mueva más allá de la última imagen
        currentPosition -= 300;    // y  no se necesita especificar la unidad de medida px porque simplemente se está realizando una operación aritmética con el valor de currentPosition.
        slider.style.left = currentPosition + 'px';
    }           // se mueve la cantidad de píxeles equivalente al ancho de una imagen
});

prev.addEventListener('click', function() {
    if(currentPosition < 0) {
        currentPosition += 300;   // y no se necesita especificar la unidad de medida px porque simplemente se está realizando una operación aritmética con el valor de currentPosition.
        slider.style.left = currentPosition + 'px';
    }         // se mueve la cantidad de píxeles equivalente al ancho de una imagen
});

*/

/////////////////////////////////////////////////////////





const slider = document.getElementById('slider'); 
const next = document.getElementById('next'); 
const prev = document.getElementById('prev'); 
let currentPosition = 0;   // el punto DESDE donde se parte de la imagen => iría de 0 a 300  ( 150 sería la 1/2 del ancho que dimos de 300 -> iría de 150 a 450)
const sliderWidth = slider.offsetWidth;    //  sliderWidth --> es el ancho de CADA slide
                                          //  slideCount  -->  es el ancho TOTAL del contenedor con todos los slide (imágenes)
                                          //  side.offetWidth  -->  ancho total del elemento, incluyendo el ancho del contenido, el padding, y el borde del element

next.addEventListener('click', function() { 
  const slideWidth = document.querySelector('img').offsetWidth;  // el ancho de CADA imagen
  const slidesCount = document.querySelectorAll('img').length;   // el ancho TOTAL del contenedor con todas las imágenes

  if(currentPosition > -(slidesCount - 1) * slideWidth) {  // Si total de las diapo menos una => es que hay todavía diapos
    currentPosition -= slideWidth;   // decrementa el ancho de un slide (imagen) (EL EL LADO DEL + QUEDA ALGUNO)
    slider.style.left = currentPosition + 'px';  //  Y seguidamente actualiza la propiedad left del slider
  }
});

prev.addEventListener('click', function() {
  const slideWidth = document.querySelector('img').offsetWidth;

  if(currentPosition < 0) {
    currentPosition += slideWidth;  // incrementa el ancho de un slide (imagen)
    slider.style.left = currentPosition + 'px';  //  Y seguidamente actualiza la propiedad left del slider -> para reflejar el cambio en la posición del slider después de que se ha decrementado el ancho de un slide en el código proporcionado.
  }
  let imagenes=document.querySelectorAll('img');
});


/////////////////////////////////////////////////////////////////////////////////////77


     





/*========================   N O T A S   A C L A R A T O R I A S  ============================*/

/*    En la condición:
"if(currentPosition > -(slidesCount - 1) * slideWidth)"
 el valor negativo se produce cuando la posición actual (currentPosition) es menor que el resultado de -(slidesCount - 1) * slideWidth 
 (((((  se refiere a que 
  la posición actual está a la izquierda de donde debería estar para mostrar otro slide en el slider. 
  En términos de valores numéricos, la posición actual en realidad es mayor en términos de píxeles, pero 
  en relación con la lógica del slider y del código en cuestión, se considera "menor" en el sentido de que 
  está en una posición antes de donde debería estar  )))))

Esto significa que la posición actual está más a la izquierda 
(es decir, en un valor menor en términos de píxeles) de lo que permitiría mostrar otro slide en el slider. 
Al ser una multiplicación y una resta, el resultado puede ser un número negativo si las condiciones son adecuadas.      */


/*      En la línea  -que le sigue a la anterior- de código: 
"currentPosition -= slideWidth;"
 se está RESTANDO el ancho DE CADA slide (slideWidth) a la posición actual del slider (currentPosition). 
 Esto significa que CADA VEZ QUE se hace CLICK en el botón de "next" (siguiente), el slider se desplaza hacia la izquierda en un ancho equivalente al de un slide. 
 De esta manera, se logra el efecto de desplazamiento de las imágenes en el slider 
 (parece que avanzan diapos cuando lo que se hace es retrasar el contendor de diapos).   */


 /*      En la última línea  -que le sigue a la anterior- de código: 
 "slider.style.left = currentPosition + 'px';" 
Tiene sentido actualizar esta propiedad (left) para reflejar el cambio en la posición del slider después de que 
 se ha decrementado el ancho de un slide en el código proporcionado.  Esto es que el slider se desplazará a la izda. (left) el mismo ancho del tamaño del slide  */


            /*   EN RESUMEN, estas dos líneas anteriores de código  -son 2 FASES- 
            están relacionadas con el desplazamiento horizontal de un slider en una página web. 
            La primera línea CALCULA la nueva posición del slider, 
            mientras que la segunda línea EJECUTA, actualizando el estilo CSS para reflejar ese desplazamiento.   */