/**1. El Desafío: "El Historial de Ventas"
Enunciado:
Tenés un array de objetos que representan ventas. Cada venta tiene una fecha (en string) y un monto.

Ordená las ventas de la más reciente a la más antigua.

Filtrá solo las ventas que ocurrieron en el año 2024 */

const ventas = [
  { producto: "Teclado", fecha: "2024-05-15", monto: 50 },
  { producto: "Monitor", fecha: "2023-12-01", monto: 300 },
  { producto: "Mouse", fecha: "2024-01-10", monto: 25 },
  { producto: "Laptop", fecha: "2024-03-20", monto: 900 }
];


//definimos la funcion filtrarVentas() para iniciar con la logica del problema 

function filtrarVentas (pArrayVentas){

    //1. validacion de existencia y consistencia 
    //   verificamos que el parametro ingresado sea un array o que este no este vacio
        if(!Array.isArray(pArrayVentas) || pArrayVentas.length === 0){
            console.error("Por favor ingresar una lista valida !");
            return [];
        }


        //2. Filtramos el array ingresado solo las del año 2024 y la ordenamos en forma ascendente
        const ventas2024 = pArrayVentas.filter(venta =>{

                        //transformamos el string fecha en un tipo de dato Date 
                        const fechaObj  =  new Date(venta.fecha);
                        return fechaObj.getFullYear() === 2024 ;
        });


        //3. ordenamos desde la mas reciente  a la mas antiguas las ventas realizadas del año 2024 
        const resultadoFinal  =  [...ventas2024].sort((a,b) =>{
            return new Date (b.fecha) - new Date (a.fecha);
        });

        return resultadoFinal;
        

    }

console.log (filtrarVentas(ventas));