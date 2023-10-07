# Fundamentos de JavaScript, primitivos, arreglos, objetos y funciones básicas
- [Tipos de datos primitivos](#tipos-de-datos-primitivos).

## Tipos de datos primitivos
Es informacion que no es un objeto y no es inmutable. y son:
1. Boolean
2. Null
3. Undefined
4. Number
5. String
6. Symbol
> **Código:**
> [primitivos.js](/s3-funda-primitivos/src/assets/js/21-intro-datos-primitivos.js).

## Palabras reservadas y nombre de variables
Algunas restricciones para la creacion de la variable es que no puede ser 
```js
let 1abc = 123; ❌
```
Algunas maneras correctas 
```js
let _ = 123; ✔
let objeto$ = 123; ✔
```
> **Palabras reservadas:**
> [palabras-reservadas](/s3-funda-primitivos/src/assets/pdf/23-palabras-reservadas.pdf).<br>
> **Pagina para verificar si las palabras son reservadas :**
> [palabras-reservadas](https://mothereff.in/js-variables).

## Arreglos
Los arreglos es un tipo de dato en el cual se puede almacenar cualquier tipo de dato.
> **Código:**
> [arreglos.js](/s3-funda-primitivos/src/assets/js/23-arreglos.js).

## Más tipos de arreglos
Aca veremos un poco de funciones que se puede realizar con los arrays
> **Código:**
> [mas-arreglos.js](/s3-funda-primitivos/src/assets/js/24-mas-arreglos.js).

## Objetos literales
Es un tipo de dato del cual su estrutura es de `Clave - Valor`
> **Código:**
> [mas-arreglos.js](/s3-funda-primitivos/src/assets/js/25-objetos-literales.js).

## Más objetos literales
Aca unos cuantas utilidades que podremos usar para los objetos literales, como:
- Eliminar una propiedad.
- Agregar propiedad.
- Trabajar un objeto como array.
- Bloquear el primer nivel de un objeto.
- Obtener un listado de las propiedades del objeto.
- Obtener un listado de los valores del objeto.
> **Código:**
> [mas-arreglos.js](/s3-funda-primitivos/src/assets/js/26-mas-objetos-literales.js). <br>
> **Más de objetos literales:**
> [Objetos literales - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object).

## Funciones
Un bloque de codigo al cual podemos reutilizar. La mejor posicion para definir las funciones es al inicio. para asi poder llamarlo después.
Existen 4 tipos para declarar una función.
```js
function holaFuncion(){}
```
```js
const holaFuncion = function(){}
```
```js
const holaFunction = () => {}
```
Este es solo si tiene un solo argumento.
```js
const holaFunction = argumento => {}
```
> **Código:**
> [funciones.js](/s3-funda-primitivos/src/assets/js/27-funciones.js).

## Retorno Funciones
Una función siempre va a devolver un valor, si no esta declarado el valor de retorno este sera de `undefined`.
> **Código:**
> [retorno-valor-funcion.js](/s3-funda-primitivos/src/assets/js/28-retorno-valor-funcion.js).