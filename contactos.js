/**Damián te dice: "Augusto, tenemos una lista de usuarios pero solo me interesan los que tienen una web terminada en .org o .com. 
 * Además, quiero que limpies los números de teléfono: algunos vienen con extensiones raras (como 'x123'), sacáselas y dejá solo el número principal. Al final, ordenalos por ciudad".

API: https://jsonplaceholder.typicode.com/users

Consignas:

Fetch: Traer los datos (con su respectivo try/catch y response.ok). --ok

Filtrar: Solo usuarios cuya website termine en .org o .com (pista: usá .endsWith()).

Mapear: Queremos un objeto con:

nombre: El nombre del usuario. --ok

email: El email. --ok 

tel: El teléfono, pero solo la primera parte (pista: usá .split(' ')[0]) --ok .

ciudad: La ciudad (address.city). --ok 

Ordenar: Por ciudad de la A a la Z (usando el a y b que vimos recién). --ok */

//1- definimos la variable global para conectarnos a la API 
const API_URL  =  "https://jsonplaceholder.typicode.com/users";


//2- DEFINIMOS LA FUNCION PARA RESOLVER EL PROBLMEA

async function getUsers(){

    try {

        //obtenemos los datos de la API y lo formateamos 
        const response = await fetch(API_URL);


        //validacion de consistencia 
        if(!response.ok){
            throw new Error ("ERROR EN LA PETICION",Error.message)
        }

        //formateamos los datos
        const data = await response.json()
       
        //Logica del problema a resolver 
       const resultFinal = data.filter(usuario => usuario.website.endsWith(".com") || usuario.website.endsWith(".org"))
                                .map(usuario => ({username: usuario.username, 
                                                email: usuario.email, 

                                                //usamos split para reemplazar un valor vacio n el primer elemento del array
                                                celular: usuario.phone.split(' ')[0],
                                                city: usuario.address.city
                                            
                                            }))
                                .sort((a,b) => a.city.localeCompare(b.city));

        //mostramos los datos en formato de tabla
       console.table(resultFinal);

        


        
    } catch (error) {
        
        console.error("error en el servidor!", error.message)
    }

}


getUsers();