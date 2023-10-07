const regresaTrue = () => {
  console.log('Regresa TRUE');
  return true;
}
const regresaFalse = () => {
  console.log('Regresa FALSE');
  return false;
}
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

/**
 * 
 * const a1 = true && 'Hola Mundo' && 150;
 * valor && valor && valor -> 150
 * --------------------------------
 * como este tiene un false como primero pues ya no pasa a los siguientes y devuelve falso
 * OJO 👁: No devuelve falso pq es falso, devuelve por que en los && todos tiene que ser true
 * false && valor && valor -> false 
*/
const a1 = false && 'Hola Mundo' && 150;


/**
 * valor && valor & soyFalso
 * Lo mismo como hay un false es valor que se le asigna es falso
 */
const a2 = 'Hola' && 'Mundo' && soyFalso;


/**
 * pued el OR es diferente del AND ya que este recorrera hasta encontrar un true, y lo devolvera
 */
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo';
console.log({ a1, a2, a3, a4, a5 });