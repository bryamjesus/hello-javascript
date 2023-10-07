const regresaTrue = () => {
  console.log('Regresa TRUE');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa FALSE');
  return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('And');
console.log(true && true); // true
console.log(true && !false); // false

console.log("===========");
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse());// false 

console.log("=====&&====");
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());


