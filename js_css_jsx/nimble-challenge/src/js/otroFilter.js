/**🛒 El Desafío: "Filtro de Productos Premium"
Escenario:
Tenés una lista de productos de una tienda. El cliente quiere ver solo los productos que:

Pertenezcan a la categoría "Electrónica".
Y que su precio sea mayor a 500. */

const productos = [
  { nombre: "Mouse", categoria: "Electrónica", precio: 300 },
  { nombre: "Teclado", categoria: "Electrónica", precio: 600 },
  { nombre: "Monitor", categoria: "Electrónica", precio: 1500 },
  { nombre: "Silla", categoria: "Muebles", precio: 2000 },
  { nombre: "Cargador", categoria: "Electrónica", precio: 150 },
  { nombre: "Auriculares", categoria: "Electrónica", precio: 800 }
];

function filtrarProductos(pArray){

    //validacion de existencia y consistencia 
    if(!Array.isArray(pArray) || pArray.length === 0){
        console.error("Lista ingresada no valida");
        return [];
    }


    //asignamos una variable para el nuevo array con los resultados 
    const resultFinal = pArray.filter(producto => {

        return (producto.categoria === "Electrónica" && producto.precio > 500)


    }).map(producto  => {

       return  `producto que su precio sea mayor a 500 y que pertenezca a la categoria electronica es ${producto.nombre}`
    })

    return resultFinal;

    

}

console.log(filtrarProductos(productos))