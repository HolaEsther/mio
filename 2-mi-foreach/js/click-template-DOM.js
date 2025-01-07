


       //   !!!   ANTES HAY QUE COMENTAR EJERCICIOS ANTERIORES porque al repetir  fragment en ellos  NO funciona aquí a bajo  --- pero    O K 
        //////////////  otro  ejercício  -> con OBJETOS en JS - CON  el  TEMPLATE -y- CREANDO las ETIQUETAS desde JS  ----  O K  ----- ////////////////

        const cardinal={
            principio:'Dinamizador',
            positivo:'Emprendedor',
            superable:'Hiperactividad'
        };
        const fijo={
            principio:'Estabilizador',
            positivo:'Concentración',
            superable:'Inmovilidad'
        };
        const mutable={
            principio:'Cambio',
            positivo:'Adaptabilidad',
            superable:'Inconstancia'
        };
    
        const otraCajaB=document.querySelector('#otra-caja-b');  
        const cualidades=document.querySelectorAll('.cualidades');         
  
        cualidades.forEach(function (cualidad) {            
    
            cualidad.addEventListener('click', function() {

                const asignaciones = equivalentes(this.textContent);  

                        // Eliminar los elementos h4, h5y p existentes                            
                        otraCajaB.innerHTML = '';

  
        // CREAR h4, h5 y p -y- sus class y sus id
        const principio = document.createElement('h4');
        const positivo = document.createElement('h5');
        const superable = document.createElement('p');

        principio.className = 'principi';
        positivo.className = 'positiv';
        superable.className = 'superabl';
        principio.id = 'principio';
        positivo.id = 'positivo';
        superable.id = 'superable';

        // ASIGNO CONTENIDOS CORRESPONDIENTES -DINÁMICOS- a cada etiqueta creada aquí
        principio.innerHTML = asignaciones.principio;
        positivo.innerHTML = asignaciones.positivo;
        superable.innerHTML = asignaciones.superable;

        // INTRODUZCO las etiquetas h4, h5 y p al contenedor 'otraCajaB'
        otraCajaB.appendChild(principio);
        otraCajaB.appendChild(positivo);
        otraCajaB.appendChild(superable);
    });
});
        function equivalentes(cualidad){
            const asignaciones={
                'CARDINAL':cardinal,
                'FIJO':fijo,
                'MUTABLE':mutable
            };
            return asignaciones[cualidad];
        }