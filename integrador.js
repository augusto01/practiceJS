/**🏆 El Ejercicio "Final Boss" (Todo en uno)
Damián te dice: "Augusto, quiero que traigas los Posts de la API, filtres solo los que pertenecen al userId: 1, los ordenes por título alfabéticamente y manejes cualquier error del servidor".

Tu misión:

API: https://jsonplaceholder.typicode.com/posts

Usar async / await y try/catch.

Validar si response.ok es falso (mostrar el status).

Filtrar con .filter() (solo userId === 1).

Ordenar con .sort() (por la propiedad title).

Mostrar el resultado final. */


//1- declaramos la variable global para el link de la API 

const API_URL = "https://jsonplaceholder.typicode.com/posts";

//2- Definimos la funcion ASINCRONA llamada getData() para obtener los datos de la API 


async function getData  (){

    //definimos el try catch para manipular cualquier excepcion que ocurra 
    try {

        //hacemos la peticion a la API
        const response = await fetch(API_URL);

        //verificamos que la respuesta haya llegado correctamente
        if (!response.ok) {
            // Lanzamos error para que salte al catch y no siga ejecutando
            throw new Error(`Error en la petición: ${response.status}`);
        }

        //definimos la constante data con el contenido de la response formateado a json y lo mostramos
        const data = await response.json();

        //implementamos la logica del enunciado filtramos el userId = 1 Ordenamos por titulo 
        const userSort =   data.filter(usuario => usuario.userId === 1).map(usuario => "Titulo: "+usuario.title).sort();


        //mostramos los titulos de forma ordenada 
        console.log("TITULOS DEL USUARIO CON EL USER_ID 1");
        console.log(userSort);

        
    } catch (error) {
        
        //si hay algun tipo de error en el servidor se muestra aqui
        console.log("OCURRIO UN ERROR DEL SERVIDOR", error.message)
    }
}


//ejecutamos la funcion 
getData();