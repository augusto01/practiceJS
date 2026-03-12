
//url a la API
const API_URL   = "https://jsonplaceholder.typicode.com/posts";




//mi objeto a enviar en la postulacion 
const miContenido = {

    title: "Mi postulacion a nimble gravity",
    body: "Estoy enviando mi postulacion y estaria encantado de trabajar aqui ! ",
    userId: 1
}


async function sendObject (pObject){


    //validacion de existencia 
    if (!pObject){
        console.log("Objeto no insertado !");
        return {}
    }


    //hacemos el try catch para hacer la peticion 
    try {

        //declamaramos la constante response para enviar los datos al servidor 
        const response =  await fetch(API_URL, {method :"POST", 
                                                headers :{'Content-Type' :'application/json; charset UTF-8  '},
                                                body: JSON.stringify(pObject)
        });

        const data  =  await response.json();
        console.log("Respuesta del servidor: ",data);


        
    } catch (error) {
        console.error("Ocurrio un error en el servidor",error.message);
    }


}


//mostramos los datos por consola 
console.log(sendObject(miContenido));

