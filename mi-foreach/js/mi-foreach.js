


/*///////////////// CONSTRUCTORES DE OBJETOS //////// para que construya mism molde de un objeto ///////////////////////
                // *** la inicial de las variables ha de ser una MAYÚSCULA al ser un constructor


function Alumnos(nombre,edad,profesion,nacionalidad,curso){   // este será el molde a reproducir
        this.nombre=nombre;
        this.edad=edad;
        this.profesion=profesion;
        this.nacionalidad=nacionalidad;
        this.curso=curso;



let Alumno1=new Alumnos('Pepa',20,'Estudiante','Española','Inglés');  //  esta serán los datos que le vendrán para rellenar ese molde -una ficha
console.log(Alumno1);

let Alumno2=new Alumnos('Peter',30,'Veterinario','Británico','Cocina española');   //  estos serán los siguientes datos que le vendrán para rellenar ese molde -otra ficha-
console.log(Alumno2);

let Alumno3=new Alumnos('Hanna',29,'Azafata','Alemana','PhotoShop');  //  esta serán los datos que le vendrán para rellenar ese molde -una ficha
console.log(Alumno1);

let Alumno4=new Alumnos('Sheiihiro',22,'Filólogo español','Japonés','Castañuelas');   //  estos serán los siguientes datos que le vendrán para rellenar ese molde -otra ficha-
console.log(Alumno2);  */


let alumno1= {nombre:'Pepa', edad:20,  profesion:'Estudiante química',  nacionalidad:'Española',  curso:'Inglés'};  //  esta serán los datos que le vendrán para rellenar ese molde -una ficha
alumno1.classList='todos';
console.log(alumno1);

let alumno2= {nombre:'Ralph', edad:27,  profesion:'Pianista',  nacionalidad:'USA',  curso:'Español'};  //  estos serán los siguientes datos que le vendrán para rellenar ese molde -otra ficha-
alumno2.classList='todos';
console.log(alumno2);

let alumno3= {nombre:'Hanna', edad:32, profesion:'Diseñadora gráfica',  nacionalidad:'Alemana',  curso:'Español'};  //  esta serán los datos que le vendrán para rellenar ese molde -una ficha
alumno3.classList='todos';
console.log(alumno3);

let alumno4= {nombre:'Jeremy', edad:30, profesion:'Piloto',  nacionalidad:'Británica',  curso:'Cocina'};   //  estos serán los siguientes datos que le vendrán para rellenar ese molde -otra ficha-
alumno4.classList='todos';
console.log(alumno4);

// *********** *//
let todos= document.querySelectorAll('.todos');
let cajaSignos=document.getElementById('cajaSignos');
cajaSignos.appendChild(alumno1);
cajaSignos.appendChild(alumno2);
cajaSignos.appendChild(alumno3);
cajaSignos.appendChild(alumno4);

todos.forEach(function(todo){
    todos.addEventListener('click',function(){
        cajaSignos.innerHTML=this.alumno.profesion;   
    });
    
})




////////////////////////////////////////////////////////////////////////////////////////