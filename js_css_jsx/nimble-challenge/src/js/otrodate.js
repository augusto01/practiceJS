/**📝 El Desafío: "Control de Inventario"
Enunciado:
Tenés una lista de productos que ingresaron al depósito. Algunos tienen la fecha mal o les falta el precio. Debes crear una función que:

Limpie los datos: Filtre solo los productos que tengan un precio válido (mayor a 0) y que sean del año 2025. --ok

Ordene: De la fecha de ingreso más antigua a la más reciente (para saber qué salió primero). --ok

Formatee: Devuelva solo el nombre y la fecha formateada como un string simple. */

const stock = [
  { nombre: "Televisor", ingreso: "2025-01-20", precio: 450 },
  { nombre: "Radio", ingreso: "2024-12-15", precio: 30 },
  { nombre: "Microondas", ingreso: "2025-02-10", precio: 0 }, // Precio inválido
  { nombre: "Licuadora", ingreso: "2025-01-05", precio: 80 },
  { nombre: "Cafetera", ingreso: "2025-03-01", precio: 120 }
];

// Tu turno, Augusto. ¡Acordate del .getFullYear() y del Spread Operator!



//definimos la funcion filterProducts para iniciar con la logica del problema 

function filterProducts  (pArrayProducts) {


    // validacion de existencia y consistencia
    if(!Array.isArray(pArrayProducts) || pArrayProducts.length === 0){
        console.error("Por favor, ingresa una lista valida !");
        return [];
    }

    //1. filtramos el array de entrada con las condiciones del problema 
    const filtered = pArrayProducts.filter(producto  =>{

        //formateamos de tipo de dato string a date y filtramos por las condiciones del requerimiento
        const fechaProduct  = new Date (producto.ingreso);
        return  producto.precio > 0 && fechaProduct.getFullYear() === 2025;
    })



    //ordenamos desde el mas reciente hacia el mas antiguo
    const productsOrder =  [...filtered].sort((a,b) =>{
        return new Date (b.ingreso) - new Date (a.ingreso);
    })

    //devolvemos solo el nombre y la fecha

    return [...productsOrder].map(product => `Producto: ${product.nombre} ____ Fecha: ${product.ingreso}`)


}


//llamada a la funcion 
console.table(filterProducts(stock));