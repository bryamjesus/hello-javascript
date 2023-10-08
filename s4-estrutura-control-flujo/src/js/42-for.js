const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
console.time('for');
for (let i = 0; i < heroes.length; i++) {
  const element = heroes[i];
  console.log(element)

}
console.timeEnd('for');

console.warn('For in');
console.time('for in'); // Extrae la posicion
for (const i in heroes) {
  //if (Object.hasOwnProperty.call(heroes, i)) {
    const element = heroes[i];
    console.log(element)
  //}
}
console.timeEnd('for in');

console.warn('For of');// Extrae el valor
console.time('for of');
for (const i of heroes) {
  console.log(i);
}
console.timeEnd('for of');