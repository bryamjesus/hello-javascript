/**
 * MAS OBJETOS LITERALES
 * clave: valor
 */
let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima pelicula': 'Infinity War', // No es recomendable
};

/**
 * Eliminar una propiedad
 */
personaje.edad = null; // ❌
console.log(personaje);

delete personaje.edad; // ✔
console.log(personaje);

/**
 * agregar una nueva propiedad
 */
personaje.casado = true;
console.log(personaje);

/**
 * Trabajar un objeto como un array
 */
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

/**
 * evitar cambios de valores en las propiedades, pero solo es
 * para un solo nivel
 */
Object.freeze(personaje);
personaje.dinero = 100000000000000; // ❌ ingresara
personaje.direccion.ubicacion = 'Costa Rica'; // ✔ edita
console.log(personaje);

/**
 * obtener  las propiedades
 */
const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

/**
 * obtener los valores
 */
const valores = Object.values(personaje);
console.log(valores);
