let a = 10;
if (a >= 10) {
  // false
  console.log('A es mayor de 10');
} else {
  console.log('A es menor a 10');
}
console.log('Fin de programa');

/////////////////////////////////////
const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia === 0) {
  console.log('Es domingo');
} else if (dia === 1) {
  console.log('Lunes');
} else {
  console.log('No es domingo');
}
