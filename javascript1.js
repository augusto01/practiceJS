

//creamos el array de las ventas 

const arrayVentas =  [

    {id: 1, categoria: 'General', precio: 500},
    {id: 1, categoria: 'VIP', precio: 200},
    {id: 1, categoria: 'General', precio: 500},
    {id: 1, categoria: 'VIP', precio: 200},
    {id: 1, categoria: 'General', precio: 500},
]

let var1 = parseInt(5.4)
console.log (var1)


//la funcion calcular Total calcula el total para una categoria en especifico 


function calcularTotal(pArrayVentas, pCategoria){

    //definimos el acumulador 
    let acum = 0;


    //validacion de existencia 
    if(!pCategoria){
        return "Categoria no insertada !"
    }

    


    //validacion de integridad
    if(typeof pCategoria !== "string"){
        return "Categoria ingresada no valida "
    }

    if(pCategoria  === "vip"){
       cat = pCategoria.toLocaleUpperCase();
    }else{
        cat = pCategoria;
    }


    //recorremos el array y hacemos las comparaciones para cada elemento 
    pArrayVentas.forEach(venta => {
        if(venta.categoria === cat){
            acum += venta.precio
        }
        
    });

    return acum;
}


console.log(calcularTotal(arrayVentas, "vip"))
//console.log("El total de la categoria General es: "+calcularTotal(arrayVentas ))


