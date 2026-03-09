const productos = [
  { nombre: 'Teclado', precio: 150, stock: true },
  { nombre: 'Mouse', precio: 50, stock: true },
  { nombre: 'Monitor', precio: 300, stock: false },
  { nombre: 'Cable', precio: 120, stock: true }
];


function nuevoArray(pProductos){

    return pProductos.filter(producto => producto.stock)
                    .map(producto => producto.precio * 1.50)
}



console.log(nuevoArray(productos))