/**
 * MANERAS DE CREAR ARRAYS
 */
const arr = new Array(10); // Poco comun
console.log(arr);
const arr2 = []; // clasica
console.log(arr2);

/**
 * Inicializando datos y accediendo a ellos
 */
let videoJuegos = ['Mario 3 ', 'Megaman', 'Chron Trigger'];
console.log({ videoJuegos });
console.log(videoJuegos[0]); // acceder primera posición

let arregloDeCosas = [
  true,
  123,
  'Bryam',
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']], // no esta mal dejar la coma al final.
];
console.log({ arregloDeCosas });

// Ejercicio: obtener el String dr. ligth
// Solución
console.log(arregloDeCosas[7][3]);
console.log(arregloDeCosas[7][4][0]);
