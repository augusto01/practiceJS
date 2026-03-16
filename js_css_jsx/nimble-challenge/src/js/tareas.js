/**Enunciado:
Tenés una lista de tareas (tasks). Cada tarea tiene un titulo y un estado ("pendiente", "en progreso" o "completada").
Debés crear una función que devuelva un objeto que te diga cuántas tareas hay de cada estado. */

const tareas = [
  { titulo: "Aprender Reduce", estado: "completada" },
  { titulo: "Practicar DOM", estado: "pendiente" },
  { titulo: "Entrevista Nimble", estado: "pendiente" },
  { titulo: "Hacer ejercicio", estado: "en progreso" },
  { titulo: "Comprar pan", estado: "completada" }
];


//definimos la funcion para implementar la logica del problema 

function contarTareas (pArray){

    //validacion de existencia y consistencia 
    if(!Array.isArray(pArray) || pArray.length === 0){
        console.log("Inserte un array valido !");
        return [];
    }



    //utilizamos el reduce para contar las tareas 
    return pArray.reduce((acc,item) => {

        const status = item.estado;

        if(acc[status]){
            acc [status]++;
        }else{
            acc[status] =1
        }
        return acc;

        
    },{})

}

console.log(contarTareas(tareas))