/**🏆 El Desafío: "Analista de Seguridad"
El escenario:
Damián te dice: "Augusto, tenemos una lista de usuarios. Necesito que identifiques a los usuarios que viven en una suite específica (que su departamento contenga la palabra 'Suite'), pero solo quiero sus nombres y el nombre de la compañía donde trabajan. Además, mostralos ordenados por nombre de la empresa".

API: https://jsonplaceholder.typicode.com/users

Consignas:

Traer los usuarios con async/await.

Filtrar: Solo aquellos cuya dirección (address.suite) incluya la palabra "Suite". --ok

Mapear: Queremos un nuevo objeto que solo tenga: { nombre: "...", empresa: "..." }. --ok

Ordenar: Por el nombre de la empresa de forma ascendente (A-Z). ---ok

Manejo de errores: Usar try/catch y validar response.ok. */ 


//definimos la variable global para la API_BASE 
const API_BASE = "https://jsonplaceholder.typicode.com/users";


//la funcion getUsers() traera los distintos usuarios de la API o del servidor

async function getUsers (){

    try {

        //declaramos la constante llamada response
        const response = await fetch (API_BASE);

        if(!response.ok){
            throw new Error ("Error en la solicitud!");
        }

        //UNA VEZ CONFIRMADO QUE HEMOS RECIBIDO LA RESPUESTA CORRECTAMENTE EMPEZAMOS CON LA LOGICA DEL PROBLEMA

        //formateamos a JSON para mostrar los datos por consola
        const data = await response.json();
       
       const result = data
                        .filter(user => user.address.suite.includes("Suite"))
                        .map(user => ({
                            nombre: user.name,
                            empresa: user.company.name
                        }))
                        // Como ahora son objetos, el sort necesita saber por qué propiedad ordenar
                        .sort((a, b) => a.empresa.localeCompare(b.empresa));

                    console.log("--- RESULTADOS ---");
                    console.table(result); // 
        

    
        
    } catch (error) {
        console.error("OCURRIO UN ERROR EN EL SERVIDOR"+error.message);
    }





}

    
getUsers ()
