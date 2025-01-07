              //  ejercíco  O  K   
 

const nombres = document.querySelectorAll('.clientes');
const signoElement = document.getElementById('signo');
const anosElement = document.getElementById('anos');
const ciudadElement = document.getElementById('ciudadd');
const deporteElement = document.getElementById('deporte');

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
                                                        //  => ees index seleccionado en el selector (en HTML) se corresponda al index del array correlativo (en js)
        
        // Asignar los datos a los elementos del DOM
        signo.textContent='Signo: ' + datosCliente[0];   // ese cliente llamará a su propio array y tomará los datos contenidos en esa posición ya exclusivamente suya 0
        anos.textContent='Años: ' + datosCliente[1];
        ciudad.textContent='Ciudad: ' + datosCliente[2];
        deporte.textContent='Deporte: ' + datosCliente[3];   
    }
             
    // Agregar evento para detectar cambios en el selector   AL  N O   H A B E R   AQUÍ UN BOTÓN DISPARADOR EVENTO, HAY QUE INDUCIRLE A DETECTAR QUE OTRA OPCIÓN SE ACTIVE PUES AQUÍ NO ES UN ENLACE AUTOMÁTICO AL CLICK 
    select.addEventListener('change', actualizarVolcado);
            // Y seguidamentee llamar a la función una vez al cargar la página para mostrar los datos predeterminados
    actualizarVolcado();

