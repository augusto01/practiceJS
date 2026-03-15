
/**📝 El Desafío: "El Dashboard de Tareas"
Enunciado:
Debes crear una función asíncrona que:

Pida los datos a la API: https://jsonplaceholder.typicode.com/todos

Filtre solo las tareas que pertenecen al userId: 1.

Filtre solo las tareas que estén completadas (completed: true).

Devuelva un array con los títulos de esas tareas en MAYÚSCULAS. */



//definimos la variable de entorno apiUrl para solicitar los datos a la API
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

async function dashsboard() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("ERROR EN LA PETICION!");
            // No hace falta el return acá porque el throw corta la ejecución
        }
        
        const data = await response.json();

        // --- LA LÓGICA QUE FALTABA ---
        const resultadoFinal = data
            .filter(tarea => tarea.userId === 1 && tarea.completed === true)
            .map(tarea => tarea.title.toUpperCase());

        console.log(resultadoFinal) ; // ¡Importante retornar!

    } catch (error) {
        console.error("OCURRIO UN ERROR:", error.message);
        return []; // Devolvemos array vacío para evitar errores en cascada
    }
}

// Para ver los datos reales, usamos .then()
dashsboard();
