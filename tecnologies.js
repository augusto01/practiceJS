/**El Desafío: "El Contador de Tecnologías"
Supongamos que recibís una lista de candidatos de una API, y cada candidato tiene un array de tecnologías que conoce. 
Tu tarea es crear una función que devuelva un objeto indicando cuántas veces aparece cada tecnología en total. */

/**ESTE DEBERIA SER EL RESULTADO FINAL 
 * {
  "React": 2,
  "JavaScript": 3,
  "Node.js": 1,
  "Python": 1,
  "Java": 1
}
 */

const candidatos = [
  { nombre: "Augusto", techs: ["React", "JavaScript", "Node.js"] },
  { nombre: "Lucía", techs: ["JavaScript", "Python"] },
  { nombre: "Mateo", techs: ["React", "Java", "JavaScript"] }
];



//definimos la funcion counterTechnologies para cumplir el enunciado 
function counterTechnologies(pCandidatosArray){

    //definir un objetivo que va a contar la cantidad de veces que se repite una categoria 
    const counts = {};

    //1.  recorremos cada candidato con un for each 
    pCandidatosArray.forEach(candidato => {

        //2. recorremos cada teconologia de un candidato
        candidato.techs.forEach(tech => {
            counts[tech] = (counts [tech] || 0) + 1;
            
        });
    });

    return counts;

}

// Ejecución y prueba
const resultado = counterTechnologies(candidatos);
console.log("Resultado del conteo:", resultado);