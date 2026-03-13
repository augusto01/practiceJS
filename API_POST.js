
//url a la API
const API_URL  = "https://jsonplaceholder.typicode.com/posts";




//mi objeto a enviar en la postulacion 
const miContenido = {

    title: "Mi postulacion a nimble gravity",
    body: "Estoy enviando mi postulacion y estaria encantado de trabajar aqui ! ",
    userId: 1
}

async function sendObject(pObject){

    //1- validamos que el objeto exista y que sea un objeto
    if(!pObject     || typeof pObject !== 'object'){
        console.error("Inserta un objeto valido !");
        return;
    };

    //2- validamos que el objeto tenga un elemento
    if(Object.keys(pObject).length === 0){
                console.error("Inserta un objeto que no este vacio !");
                return;
    }


    //3- si pasa las validaciones hacemos la peticion de tipo POST
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pObject)
      });
      const data = await response.json();
      console.log('Creado con éxito:', data);
    } catch (error) {
      console.error('Error en POST:', error);
    }

}




console.log(sendObject(miContenido));