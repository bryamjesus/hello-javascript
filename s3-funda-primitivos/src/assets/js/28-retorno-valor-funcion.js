/**
 * RETURN DE UNA FUNCIÓN
 * Cuando la funcion no tiene 
 * un return explicito
 * siempre va a devolver 
 * undefined
 */

function saludar(nombre) {
  console.log('Hola ' + nombre);
  return [1, 2, 3, 4, 5];
  console.log('Consola que nunca se ejecutara');
}

const saludar2 = function (nombre) {
  console.log('Hola ' + nombre);
}

const saludar3 = (nombre) => {
  console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Bryam');
console.log({ retornoDeSaludar })


function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  return a + b
}
const sumar2UnaLinea = (a, b) => a + b

console.log(sumar(1, 2))
console.log(sumar2(1, 2))
console.log(sumar2UnaLinea(1, 2))

function getAleatorio() {
  return Math.random();
}

// funcion flecha sin llaves
const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());