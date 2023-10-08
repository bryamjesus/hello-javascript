/**
 * Metodos de los Arrays
 */

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Cuantos elementos tiene el array: ', juegos.length); // Total elementos

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; // Obtiene el ultimo elemento
console.log({ primero, ultimo });

/**
 * Recorrer Arrays
 */
juegos.forEach((elemento, indice, arreglo) => {
  console.log({ elemento, indice, arreglo });
});

/**
 * Insertar nuevo elemento al final del array
 * @method push
 * Inserta un elemento al ultimo
 * @returns la nueva longitud del array
 */
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

/**
 * @method unshift Insertar nuevo elemento al inicio del array
 * @returns la nueva longitud del array
 */
nuevaLongitud = juegos.unshift('Superman');
console.log({ nuevaLongitud, juegos });

/**
 * @method pop Elimina el ultimo elemento
 * @returns el elemento borrado
 */
let elementoBorrado = juegos.pop();
console.log({ elementoBorrado, juegos });

let posicion = 1;
console.log({ juegos });
/**
 * @method splice
 * @param start posicion que se requiere eliminar
 * @param deleteCount cuantos elementos se regquier eliminar a partidr del start
 * @returns el/los elemento(s) eliminado(s)
 */
let juegoBorrados = juegos.splice(posicion, 2);
console.log({ juegoBorrados, juegos });

/**
 * @method indexOf Busca el elemento, es case sensitive
 * @returns indice, -1 si no lo encuentra
 */
let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });
