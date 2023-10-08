/**
 * Días de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consulta si esta abierto hoy...
const dia = 1; // 0: domingo...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abiero, esta cerrado, hoy abridmos a las xx

// if ([0, 6].includes(dia)) { // dia === 0 || dia === 6
//   console.log('Fin de semana');
//   horaApertura = 9;
// } else {
//   console.log('Dia de semana');
//   horaApertura = 11;
// }
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = 'Esta abierto';
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }
mensaje =
  horaActual >= horaApertura
    ? 'Esta abierto'
    : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura });
console.log({ mensaje });
