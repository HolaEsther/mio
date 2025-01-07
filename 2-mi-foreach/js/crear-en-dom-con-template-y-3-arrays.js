


 
const arrayCiudades =['París', 'Guayaquil', 'Cádiz', 'Milán'];
const arrayNombres =['Perro', 'Gallo', 'Cerdo', 'Mono'] ;
const arrayAnimales = ['./img/perro.png', './img/gallo.png', './img/cerdo.png', './img/mono.png']; 
const templateC = document.querySelector('#templateC'); 
const templateN = document.querySelector('#templateN'); 
const templateA = document.querySelector('#templateA'); 
const fragment = document.createDocumentFragment(); 
const cajonera = document.querySelector('#cajonera'); 



arrayCiudades.forEach(function(ciudad){
    const clon = templateC.content.cloneNode(true);
    clon.querySelector('h4').textContent = ciudad;
    fragment.appendChild(clon);
})
cajonera.appendChild(fragment);



arrayNombres.forEach(function(nombre){
    const clon = templateN.content.cloneNode(true);
    clon.querySelector('p').textContent = nombre;
    fragment.appendChild(clon);
})
cajonera.appendChild(fragment);



arrayAnimales.forEach(function(animal){
    const clon = templateA.content.cloneNode(true);
    clon.querySelector('img').setAttribute('src', animal);
    fragment.appendChild(clon);
});
cajonera.appendChild(fragment);


