/**El Desafío: "El Filtro de Candidatos VIP"
Tenés una lista de candidatos con su nombre, 
su sueldo pretendido y si están disponibles para empezar ya (disponible: true/false).

Tu tarea: Crear una función que reciba el array y devuelva solo los nombres de los candidatos que piden menos de 1800 USD y que están disponibles. */


const candidatos = [
  { nombre: "Augusto", pretension: 1500, disponible: true },
  { nombre: "Juan", pretension: 2500, disponible: true },
  { nombre: "Lucía", pretension: 1700, disponible: false },
  { nombre: "Mateo", pretension: 1200, disponible: true }
];


//definimos la funcion filteredCandidatesVIP()

function filteredCandidatesVIP (pArrayCandidates){

    //1. validamos que el array ingresado sea valido 
    if (!pArrayCandidates){
        console.log("No se ingreso ningun array !");
        return {}
    }

    //2. una vez nos aseguramos que el array ingresado es valido lo recorremos y empezamos con la logica del problema 
    return pArrayCandidates.filter(candidate => candidate.pretension < 1800 && candidate.disponible)
                                        .map(candidate => candidate.nombre);

    //3. retornamos el resultado final
    return resultFinal;


}

console.log(filteredCandidatesVIP(candidatos));