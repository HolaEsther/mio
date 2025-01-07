

///////////////////////   para el SLIDER  por APARICIÓN al click en manejadores   //////////////////////////////

const slider = document.getElementById('slider'); 
const slides = slider.getElementsByTagName('img'); 
const texts = slider.getElementsByTagName('p');

let index = 0;  // ponemos foco en la situación de la primera imagen y texto

function showSlide() {
    for (let i = 0; i < slides.length; i++) {  //  NO se vera ninguna imagen y texto contenidas entre la primera y el total de ellas (al recorrerlas)
        slides[i].style.display = 'none';
        texts[i].style.display = 'none';
    }

    slides[index].style.display = 'block';  // PERO se verá la primera imagen y texto
    texts[index].style.display = 'block';
}

function nextSlide() {
    index++;  // pasamos UNA posición
    if (index >= slides.length) {   // Si esa posición es igual o mayor a la cantidad total de imagenes, REINIciamos la posición a la primera Y llamos a la función del principio
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;  //  reetrocedemos UNA posicioón
    if (index < 0) {   //   Si esa posición es menor a la primera (antes de esa), saltamos al foco en la última Y llamamos tambi a la función primera
        index = slides.length - 1;  // -1 porque en JS el numeral de arrays es 1 mas atrás
    }
    showSlide();
}

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

showSlide();

        