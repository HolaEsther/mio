
                                //  ejercíco  O  K   
                                
 
const arrayPedro = ['Áries', 30, 'Cádiz', 'Surf', 'ruta_a_imagen_de_pedro.jpg'];
const arrayMaria = ['Géminis', 22, 'Murcia', 'Patinaje', 'ruta_a_imagen_de_maria.jpg'];
const arrayLuis = ['Tauro', 28, 'Madrid', 'Escalada', 'ruta_a_imagen_de_luis.jpg'];
 
const todosclientes = [arrayPedro, arrayMaria, arrayLuis];

const clientes = document.querySelectorAll('.clientes');  // cada uno de los cliklables en HTML
const signoElement = document.getElementById('signo');
const anosElement = document.getElementById('anos');
const ciudadElement = document.getElementById('ciudadd');
const deporteElement = document.getElementById('deporte');
const imagenVolcada = document.getElementById('imagen-volcada');

clientes.forEach(cliente => {
    cliente.addEventListener('click', () => {
        const index = cliente.getAttribute('data-index');  // DECLARO LA EXISTENCIA DEL index deltro de opciones en HTML
        const datosCliente = todosclientes[index];   //  ASOCIO el index con las posiciones contenidas dentro de array colectivo
              // y ya puedo llamar a las posiciones exclusisvas internas de cada array aludido:
        signoElement.innerText = 'Signo: ' + datosCliente[0];
        anosElement.innerText = 'Años: ' + datosCliente[1];
        ciudadElement.innerText = 'Ciudad: ' + datosCliente[2];
        deporteElement.innerText = 'Deporte: ' + datosCliente[3];
        imagenVolcada.src = datosCliente[4]; // Suponiendo que la ruta de la imagen está en el último índice

    });
});


