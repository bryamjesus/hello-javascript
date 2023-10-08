/**
 * FUNCIÓN
 */
function saludar(nombre) {
  // console.log('Hola Mundo desde saludar');
  console.log('Hola ' + nombre);

  console.log(arguments); // 👈 Solo para las funciones tradicionales(tiene palabra FUNCTION)
}

const saludar2 = function (nombre) {
  // console.log('Hola Mundo desde saludar2');
  console.log('Hola ' + nombre);
};

const saludar3 = (nombre) => {
  // console.log('Hola flecha');
  console.log('Hola ' + nombre);
};

saludar(); // Hola undefined
saludar('Bryam'); // Hola Bryam

saludar2(); // Hola undefined
saludar2('Bryam'); // Hola Bryam

saludar('Bryam', 40, true, 'Perú'); // informacion de mas 👈

saludar3();
saludar3('Nombre');
