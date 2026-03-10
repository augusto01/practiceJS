//conectar a la siguiente API y explicar el tema de la promesa https://jsonplaceholder.typicode.com/users


//una promesa es un tipo de dato asincrono es decir es un valor que todavia no conocemos 
//tiene 3 estados pendiente aceptado o rechazado 

//creo el script 

async function  obtenerUsuarios()  {

//try catch es la instruccion por excelencia para manejar errores y excepciones
    try {
        //1- hacemos la peticion al servidor 
        console.log("cargando usuarios ...");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        //2- si hay un error 500 o 400 mostramos el error aqui
        if(!response.ok){
            throw new Error("Error no se pudo obtener los usuarios");
            
        }

        //3- si las respuesta es correcta entonces convertimos a formato json y mostramos el objeto 
        const usuarios  = await response.json();


        //mapeamos para que solo muestre el nombre
        const nombresConId = usuarios.map(u => `ID: ${u.id} - Nombre: ${u.name}`);
        console.log("Lista de nombres:", nombresConId);
    
        
    } catch(error){
        console.error("Error en la peticion",error.message)
        
    }

}

obtenerUsuarios();