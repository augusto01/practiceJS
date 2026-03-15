/**📝 El Desafío: "El Buscador de Ofertas"
Enunciado:
Tenés una lista de productos. Cada producto tiene un nombre, un precio y una categoría. 
Tenés que crear una función que reciba esa lista y devuelva un nuevo array que solo tenga los nombres de los productos que pertenecen a la categoría
 "Tecnología" y cuyo precio sea menor a 1000. */

 const productos = [
  { nombre: "Teclado", precio: 500, categoria: "Tecnología" },
  { nombre: "Silla", precio: 1500, categoria: "Muebles" },
  { nombre: "Mouse", precio: 1200, categoria: "Tecnología" },
  { nombre: "Pendrive", precio: 300, categoria: "Tecnología" },
  { nombre: "Lámpara", precio: 800, categoria: "Hogar" }
];


//1. creamos la funcion techsProducts para cumplir con el enunciado del problema 

function techsProductos(pArrayProducts){

    //validacion de existencia para la robustez del metodo 
    if(!pArrayProducts || ! Array.isArray(pArrayProducts) || pArrayProducts.length === 0){
        console.log("Inserte un array valido !");
        return []; 
        
    }
    


    //concatenamos los dos metodos para filtrar y mostrar solo el nombre del producto 
    //que su precio sea < 1000 y ademas pertenezca a la categoria tecnologia 
    const resultFinal = pArrayProducts.filter(product => product.categoria === "Tecnología" && product.precio < 1000)
                                    .map(product => product.nombre).sort((a,b) => a.localeCompare(b));



    //retornamos el nuevo array
    return resultFinal;
}

console.log(techsProductos(productos));