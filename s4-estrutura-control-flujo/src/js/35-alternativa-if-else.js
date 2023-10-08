const diaLetrasObjeto = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado',
};

const diaLetrasArray = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];

const fechaActual = new Date();
let dia = fechaActual.getDay();

// operador or `||` sirve para
// preguntar si tiene valor, no es nulo,
// o no undefined muestra el mensaje
console.log(diaLetrasObjeto[dia] || 'Dia no definido');
console.log(diaLetrasArray[dia] || 'Dia no definido');
