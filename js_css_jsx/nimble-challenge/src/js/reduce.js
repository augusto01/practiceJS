/**Enunciado:
Tenés una lista de productos en un carrito. Cada objeto tiene nombre, cantidad y precio.
Debés crear una función que devuelva un objeto con:

totalPagar: La suma de todos los productos (precio * cantidad).

totalItems: La cantidad total de unidades en el carrito. */

const carrito = [
  { nombre: "Remera", precio: 1500, cantidad: 2 },
  { nombre: "Pantalón", precio: 3500, cantidad: 1 },
  { nombre: "Zapatillas", precio: 7000, cantidad: 1 },
  { nombre: "Medias", precio: 500, cantidad: 3 }
];

// --- TU LÓGICA AQUÍ ---

//implementamos la funcion totalPagar para implementar la logica del problema 

function calcularCarrito(pArray){

    //validacion de existencia y consistencia 
    if(!Array.isArray(pArray) || pArray.length === 0){return console.log("insertar una lista valida!");}


    //implementamos el reduce para el total a pagar 
    const initialValue = 0;
    const dineroTotal  = pArray.reduce((acc, item) => {return acc + item.cantidad * item.precio},0);

    //sumar las cantidadades de las unidades
    const initial = 0;
    const unidadesTotales  = pArray.reduce((acc, item) => {return acc + item.cantidad},0);
    

    //retornamos los valores obtenidos 
    return {
        totalPagar : dineroTotal,
        unidadesVendidas: unidadesTotales
    }
}


//llamamos a la funcion 
console.log (calcularCarrito(carrito));