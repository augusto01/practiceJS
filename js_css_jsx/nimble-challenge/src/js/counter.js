/**
 * 📝 El Desafío: "El Contador de Categorías"
Enunciado:
Tenés el mismo array de productos de antes. Pero ahora, el jefe quiere un informe rápido. Tenés que crear una función que devuelva un objeto donde 
las claves sean los nombres de las categorías y los valores sean la cantidad de productos que hay en cada una.
 * 
 * 
 * 
 */

const productos = [
  { nombre: "Teclado", categoria: "Tecnología" },
  { nombre: "Silla", categoria: "Muebles" },
  { nombre: "Mouse", categoria: "Tecnología" },
  { nombre: "Mesa", categoria: "Muebles" },
  { nombre: "Monitor", categoria: "Limpieza" },
  { nombre: "Monitor", categoria: "Limpieza" },
  { nombre: "Monitor", categoria: "Tecnología" },
  { nombre: "Monitor", categoria: "Tecnología" },
  { nombre: "Monitor", categoria: "Muebles" },
  { nombre: "Monitor", categoria: "Muebles" }
];

function contarCategorias(pArrayProducts) {
    // 1. Validación de siempre
    if (!Array.isArray(pArrayProducts)) return {};



    let informe = {}

    //contamos las categorias si existen o no 
    pArrayProducts.forEach(product => {

        const cat =  product.categoria


        //si la cateogoria leida existe entonces sumamos 1 sino al ser la primera vez que nos encontremos 
        //con eso asignamos 1 
        if(informe[cat]){
            informe[cat] ++;
        }else{
            informe[cat] = 1
        }
        

    
    }
);
    
return informe
}

console.log(contarCategorias(productos));
// Resultado: { Tecnología: 3, Muebles: 2 }