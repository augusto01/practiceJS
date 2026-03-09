/**1. El "Filtro de Stock" (Lógica de Negocio)
Nimble trabaja mucho con datos. Te pueden dar un array de productos y pedirte algo específico.

Ejercicio: De una lista de productos, devolvé solo los nombres de los que cuestan más de $100 y tienen stock. */

const productos = [
  { nombre: 'Teclado', precio: 150, stock: true },
  { nombre: 'Mouse', precio: 50, stock: true },
  { nombre: 'Monitor', precio: 300, stock: false },
  { nombre: 'Cable', precio: 120, stock: true }
];

// Tip: Aprendé a encadenar .filter() y .map()
// Resultado: ['Teclado', 'Cable']


function filteredProducts(pArrayProducts) {
    //declaramos el array auxiliar para almacenar los elementos que cumplen las condiciones 
    var arrayAux  = [];

    //recorremos el array para hacer las comparaciones 
    pArrayProducts.forEach(producto => {

        if (producto.precio > 100 & producto.stock){
                arrayAux.push(producto.nombre);
        }
        
    });

    return arrayAux
}

console.log("Los productos que valen mas de 100$ y que tienen stock disponible son: "+filteredProducts(productos));


/** OTRA FORMA DE HACER  */

function filteredProductosPro(pProductosArray){

    return pProductosArray
            .filter(producto => producto.precio > 100 && producto.stock) //filtramos los objetos con esas condiciones 
            .map(producto => producto.nombre)


}

console.log("La cantidad de elementos de este array es: "+productos.length);