//conectar a la siguiente API y explicar el tema de la promesa https://jsonplaceholder.typicode.com/users


//una promesa es un tipo de dato asincrono es decir es un valor que todavia no conocemos 
//tiene 3 estados pendiente aceptado o rechazado 

//creo el script 

async function getUsers(){


    //creamos el try catch para manipular los datos y los errores en caso de que sucedan ¿
    try{

        const response = await fetch ("https://jsonplaceholder.typicode.com/users");

        //validaciones de tipos de error 400 o 500 
        if(!response.ok){
            console.log("error al obtener los usuarios !")                                                  
        }


        //formateamos a formato JSON para mostrar los datos
        const data  = await response.json();

        const userNamesID = data.map(u=> `ID: ${u.id} username: ${u.username } `);
        console.log(userNamesID);


    }catch(error){

        console.error("ERROR EN LA SOLICITUD: ",error.message)

    }
}

console.log(getUsers())