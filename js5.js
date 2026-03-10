/**invertir el array */

//definimos el array 
const stack = ['Node', 'React', 'JavaScript'];


//definimos la funcion para invertir el array 
function invertirArray(pArray){
    return pArray.toReversed()
}

console.log(invertirArray(stack))



function inversionLogica(pArray){
    //definimos el array aux
    let invertido =  [];


    //recorremos el array de atras para adelante 
    for(let i = pArray.length - 1; i >= 0; i--){

        invertido.push(pArray[i]);
    }


    //retornamos el array invertido 
    return invertido
}

console.log(inversionLogica(stack))