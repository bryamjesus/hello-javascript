let a = 10,
  b = 20,
  c = 'Hola ',
  d = 'Spiderman',
  x = a + b;

const saludo = c + d;

console.log({ a });
console.table({ b });
console.warn({ c });
console.error({ d });

// Con estilos
console.log('%c Mis variables', 'color:blue; font-weight: bold');
