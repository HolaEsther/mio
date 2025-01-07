

///////////////////////   para el SLIDER  con DESLIZAMIENTO al pasar las imágenes y textos con manejadores  //////////////////////////////

const slider = document.getElementById('slider'); 
const slides = document.querySelectorAll('img'); 

const next = document.getElementById('next'); 
const prev = document.getElementById('prev'); 

let i = 0;  // ponemos foco en la situación de la primera imagen del array 



next.addEventListener('click', function() {
  i++;
  if (i >= slides.length) {
    i = 0; // Volver al principio si llegamos al final -el FOCO de atención-

  }
  showSlide();
});

prev.addEventListener('click', function() {
  i--;
  if (i < 0) {
    i = slides.length - 1; // Ir al final si estamos al principio -el FOCO de atención-

  }
  showSlide();
});
  

function showSlide() { 
    slides.forEach(function(slide, index) {  /* aquí hay 2 parámetros: cada imagen y su posición -pero ACTUAL (index), 
                                                            ya que la fija dentro del array está representada por variable i aquí-  */
        if (index === i) { 
            slide.style.display = 'block';    // Si NO está nada mas que la del foco entonces ocupa el único lugar en el espacio del array y físico, al aparecer encuadrado       
        } else { slide.style.display = 'none';         
                } 
    }); 
};


