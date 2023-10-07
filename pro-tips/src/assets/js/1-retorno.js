// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }


// Si solo pones parentesis JS va
// a pensar que es el cuerpo de la funcion
// y no de lo que se requiere retorno,
// para ello la solucion es ponerlo entre parentesis
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Bryam', 'Talledo');
console.log(persona);

function imprimeArgumentos() {
  console.log(arguments)
}

const imprimeArgumentos2 = (edad, ...arg) => { // despues del parametor arg no puede ir otro paramertro mas
  console.log({ edad, arg })
  return arg;
}

imprimeArgumentos(10, true, false, 'Bryam', 'Hola');
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Bryam', 'Hola');

console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Andrea', 'Ochoa');
console.log(nuevoApellido)

/**
 * Desestructuracion de argumentos
 */
let tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  // edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
  console.log(trajes);
}
imprimePropiedades(tony);