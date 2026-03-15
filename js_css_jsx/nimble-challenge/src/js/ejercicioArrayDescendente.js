/**RECIBIR UN NUMERO ENTEROS Y DEVOLVERLOS DE FORMA DESCENDENTE */

// 1. Importás el módulo de testeo de Node
import test from 'node:test';
import assert from 'node:assert';

function ordenarDescendente (num){

return Number (num.toString().split("").sort().reverse("").join(""));


}


console.log(ordenarDescendente(11111)); // Resultado: 84321

// 3. El bloque de Test (Esto es lo que queda cheto)
test('Debe ordenar los números de mayor a menor', () => {
  // Caso normal
  assert.strictEqual(ordenarDescendente(42183), 84321);
  
  // Caso con un solo número
  assert.strictEqual(ordenarDescendente(5), 5);
  
  // Caso con números repetidos
  assert.strictEqual(ordenarDescendente(1122), 2211);
});


