/**📝 El Desafío: "El Limpiador de Precios"
Enunciado:
Te dan un array de strings que representan precios con el signo de dólar y puntos (ejemplo: "$1.200"). 
Tenés que crear una función que reciba ese array y devuelva la suma total de todos los precios, pero como un número entero (sin signos ni puntos).

Array de entrada: ["$1.500", "$2.300", "$500"]Resultado esperado: 4300 (Number) */

//definimos el array a ingresar


const arrayPrecios = ["$1.500", "$2.300", "$500"];

//definimos la funcion para cumplir con la logica del problema 

function calcularTotal (pArrayPrecios){

        //definimos un acumulador para el precio total 
        let acumTotal = 0;

        pArrayPrecios.forEach(element => {

            //1- debemos limpiar los elementos del array 
            const arrayLimpio  = element.replace("$", "").replaceAll(".","");


            //2- una vez limpio procedemos a sumar cada elemento
            acumTotal += Number(arrayLimpio);
            
        });
       
return acumTotal.toString();
}

console.log(calcularTotal(arrayPrecios));

