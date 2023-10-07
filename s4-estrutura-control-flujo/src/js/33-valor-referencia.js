/**
 * Valor, referencia y romper referencia
 */

let a = 10;
let b = a;
a = 30;
console.log({ a, b })

//

let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana })

//

const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter); // mandamos por referencia

console.log({ peter, tony })

/**
 * Crear copia de un objeto (Clonar)
 * Spreat Operator
 */
let maria = { nombre: 'Maria' };
let bryam = { ...maria }; // separa elementos, y rompe la referencia
bryam.nombre = 'Bryam';

console.log({ maria, bryam })

const cambiaNombre2 = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
};

let andrea = { nombre: 'Andrea' };
let tony2 = cambiaNombre2(andrea);
console.log(andrea, tony2);


// ARREGLOS
const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = frutas;
otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });

console.time('slice');
const otrasFrutas3 = frutas.slice();
otrasFrutas3.push('Mango');
console.table({ otrasFrutas3, frutas })
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
otrasFrutas2.push('Mango');
console.table({ frutas, otrasFrutas2 });
console.timeEnd('spread');

console.time('structuredClone');
const otrasFruntas4 = [...frutas];
otrasFruntas4.push('Mango');
console.table({ otrasFruntas4, frutas });
console.timeEnd('structuredClone');