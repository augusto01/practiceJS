/**🧠 El Desafío: Lógica de Filtro
Tenés el array de empleados y una variable que simula lo que el usuario escribió en el buscador.
 Tu misión es crear una función que devuelva un nuevo array con los empleados que coincidan. */

 const empleados = [
  { nombre: "Augusto", puesto: "Junior Developer" },
  { nombre: "Luciana", puesto: "Senior Architect" },
  { nombre: "Marcos", puesto: "Project Manager" },
  { nombre: "Ana", puesto: "QA Engineer" }
];

const textoBusqueda = "au"; // El usuario escribió esto

// --- TU LÓGICA AQUÍ ---

function buscadorEmpleados (pArrayEmpleados){

    //validacion de congruencia y existencia 
    if(!Array.isArray(pArrayEmpleados) || pArrayEmpleados.length  === 0){
        console.error("Error, por favor ingrese una lista valida ");
        return [];
    }


    //empezamos con la logica 
    const results = pArrayEmpleados.filter(emp =>{

        //variables convertidas a minuscula para el buscadors
        const input  =  textoBusqueda.toLowerCase();
        const employee =  emp.nombre.toLowerCase();


        //lo unico que hace aca es compara si el texto ingresado coincide con alguno almacenado en el array 
        // si coincide devuelve true si no false 
        return employee.includes(input);



    }).map(emp => `empleados que coinciden con el buscador: ${emp.nombre}`);

    return results; 



}

console.log(buscadorEmpleados(empleados));