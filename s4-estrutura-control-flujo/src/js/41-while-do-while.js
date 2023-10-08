const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

// while (i < carros.length) {
//   console.log(carros[i]);
//   i++;
// }
console.warn('While');
console.time('while');
while (carros[i]) { // cuando sea undefined se detiene el while
  if (i === 1) {
    i++;
    continue;
  }
  console.log(carros[i]);
  i++;
}
console.timeEnd('while');

let j = 0;

console.warn('Do While');
console.time('do while');
do {
  console.log(carros[j]);
  j++;
} while (carros[j])
console.timeEnd('do while');
