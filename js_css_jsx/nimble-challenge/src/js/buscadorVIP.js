/**Escenario:
Tenés que traer una lista de usuarios de una API real (jsonplaceholder).
Tu misión es crear una función que:

Traiga los usuarios (GET).

Filtre solo a los que tienen un id par (divisible por 2).

Mapee el resultado para que devuelva un array de frases: "Usuario ID [id]: [nombre]".

URL de la API: https://jsonplaceholder.typicode.com/users */

//definimos la variable global para comunicarnos con la API 
const apiUrl = "https://jsonplaceholder.typicode.com/users"



//definiendo una funcion asincrona para obtener los datos de la API 

async function obtenerDatos () {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Error en la red");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

const dataobtenida = await obtenerDatos();

function usersVIP (pArray){

    return pArray.filter( user => {
        return user.id % 2 === 0;
    }).map(user => {
        return `El usuario ${user.name} es divisible por 2 `
    })
}

console.log(usersVIP(dataobtenida));

