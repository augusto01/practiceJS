//Prueba Tecninca, Augusto Almiron, Nimble Gravity !

/**La API: https://jsonplaceholder.typicode.com/users

Tu Objetivo:

Crear una función asíncrona llamada generarReporteStaff. --ok

Obtener los datos con fetch. --ok

Filtrar: Quedarte solo con los usuarios cuya empresa (company.name) contenga la palabra "Group". --ok

Mostrar: Imprimir en consola un string formateado por cada uno que diga:
"💼 [Nombre] trabaja en la empresa: [Nombre de la Empresa]" */



//1- creamos una variable global con el link de la API para obtener los datos del servidor

const apiUrl  = "https://jsonplaceholder.typicode.com/users";


async function generarReporteStaff (){

    try {

     //hacemos la peticion a la API 
      const response = await fetch(apiUrl);

      //si en la peticion surge algun error lo mostramos 
      if (!response.ok) throw new Error('Error al obtener datos');

      //si la peticion es exitosa entonces transformamos los datos a formato json para poder mostrarlo en pantalla
      const data = await response.json();

      // filtramos los datos de data para cumplir las condiciones del enunciado
        // 1. que el nombre de la empresea contenga la palabra "Group"
        const result  =  data.filter(users => users.company.name.includes("Group"))
    
        //2. retornar el array result con el formato esperado
        return result.forEach(user => {

            console.log(`El usuario: ${user.name} trabaja en la empresa: ${user.company.name}`);
        });

    } catch (error) {
      console.error('Fallo en GET:', error);
    }

}

//llamamos a la funcion para ejecutarla
generarReporteStaff();