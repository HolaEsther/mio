
const clientes = document.querySelectorAll('.clientes');

const signoElement = document.getElementById('signo');
const anosElement = document.getElementById('anos');
const ciudadElement = document.getElementById('ciudad');
const deporteElement = document.getElementById('deporte');

// Arrays con los datos de los clientes
const arrayPedro=['Áries', 30, 'Cádiz', 'Surf'];
const arrayMaria=['Géminis', 22, 'Murcia', 'Patinaje'];
const arrayLuis=['Tauro', 28, 'Madrid', 'Escalada'];

// Arreglo con los datos de los clientes
const todosClientes=[arrayPedro, arrayMaria, arrayLuis];



clientes.forEach(function(cliente){
    cliente.addEventListener('click',function(){
        const index=cliente.getAttribute('data-index');
        const datosCliente=todosClientes[index];

        signoElement.innerText = 'Signo: ' + datosCliente[0];
        anosElement.innerText = 'Años: ' + datosCliente[1];
        ciudadElement.innerText = 'Ciudad: ' + datosCliente[2];
        deporteElement.innerText = 'Deporte: ' + datosCliente[3];
    })
});