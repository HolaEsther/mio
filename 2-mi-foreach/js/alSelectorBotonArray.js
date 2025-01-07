              
              
                 //  ejercíco  O  K   
 


const boton=document.querySelector('#boton');
const nombres = document.querySelectorAll('.clientes');
const signo = document.getElementById('signo');
const anos = document.getElementById('anos');
const ciudad = document.getElementById('ciudad');
const deporte = document.getElementById('deporte');

// Arrays con los datos de los clientes
const arrayPedro=['Áries', 30, 'Cádiz', 'Surf'];
const arrayMaria=['Géminis', 22, 'Murcia', 'Patinaje'];
const arrayLuis=['Tauro', 28, 'Madrid', 'Escalada'];

// Arreglo con los datos de los clientes
const clientes=[arrayPedro, arrayMaria, arrayLuis];
const select=document.getElementById('cajaNombres');  // el selector (aún sin aludir a lo que contiene)


    // Función para volcar los datos en el DOM
    function actualizarVolcado() {

        // Obtener el índice del cliente seleccionado

        const selectedIndex=select.selectedIndex;  // el index del selector (ya alude a la posición de cada cliente, sin aún determinar cuál de ellos, y llamará a su array correspondiente)
        // Obtener los datos del cliente correspondiente
        const datosCliente=clientes[selectedIndex];    // aqui CORRELACIONO el index del data-index opciones con el index del cliente dentro de la lista array clientes 
                                                        // que a su vez captará los de su array personal
        
        // Asignar los datos a los elementos del DOM
        signo.textContent='Signo: ' + datosCliente[0];   // ese cliente llamará a su propio array y tomará los datos contenidos en esa posición ya exclusivamente suya 0
        anos.textContent='Años: ' + datosCliente[1];
        ciudad.textContent='Ciudad: ' + datosCliente[2];
        deporte.textContent='Deporte: ' + datosCliente[3];   
        
    }

    boton.addEventListener('click', actualizarVolcado);         //   pues AQUÍ SI PONGO un BOTÓN como disparador de evento (y utiliza esa función)
   