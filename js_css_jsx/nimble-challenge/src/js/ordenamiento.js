const arrayDesordenado = [1,8,6,5,4,3,2];


function ordenarArray(pArrayDesordenado){

    //validaciond de existencia y consistencia 
    if(!Array.isArray(pArrayDesordenado) || pArrayDesordenado.length < 2){
        console.log("Ingresar una lista valida !");
        return[];
    }

    //ordenamos el array que nos dieron por parametro 
    const arrayOrdenado  =  pArrayDesordenado.sort((a,b) => a-b);

    //retornamos el resultado 
    return arrayOrdenado


}

console.log(ordenarArray(arrayDesordenado));