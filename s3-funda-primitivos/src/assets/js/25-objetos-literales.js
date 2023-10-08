/**
 * OBJETOS LITERALES
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

console.log(personaje);
console.log('Nombre : ', personaje.nombre);
console.log('Nombre : ', personaje['nombre']);
console.log('Edad : ', personaje['edad']);

console.log('Coors : ', personaje.coords.lat);

console.log('Numero de trajes  : ', personaje.trajes.length);
console.log(
  'Ultimo de trajes  : ',
  personaje.trajes[personaje.trajes.length - 1]
);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Vivo', personaje['ultima pelicula']);
