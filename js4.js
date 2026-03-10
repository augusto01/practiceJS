/*Te dan un array de productos. Tenés que devolver solo los nombres de los productos que están en stock y valen más de $10.0**/



//definimos el array de productos 
const productos = [
    { nombre: 'Teclado', precio: 5, stock: true },
    { nombre: 'Mouse', precio: 3, stock: true },
    { nombre: 'Monitor', precio: 10, stock: false },
    { nombre: 'Pad', precio: 11, stock: true }
];



//definimos la funcion para hacer las comparaciones pertinentes 

function filteredProductos(pArrayProducts){

    //validacion de existencia 
    if(pArrayProducts.length  === 0){
        return("Insertar un array que no este vacio!")
    }
        
    
    //retornamos una copia del array original filtranod por el precio > 10 y con stock  = true
    return pArrayProducts.filter(producto => producto.precio > 10 && producto.stock).map(producto => producto.nombre);

}


function newProducts(pArrayProducts){

    //definmos un array auxiliar para hacer las comparaciones 
    let array_aux = [];

    if(pArrayProducts.length  === 0){
        return("Insertar un array que no este vacio!")
         
    }
    


    //recorremos el array y si cumple las condiciones entonces lo añadimos al array auxiliar 
    pArrayProducts.forEach(producto => {

        if(producto.precio > 10 && producto.stock){
            array_aux.push(producto.nombre);
        }

    });

    return array_aux
}


console.log(newProducts(productos))