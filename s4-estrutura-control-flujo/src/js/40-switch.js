const fechaActual = new Date();
const dia = fechaActual.getDay(); // 0: domingo;
/**
 * La evaluacion que hace el switch es como si hicieramos "==="
 */
switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Lunes');
    break;
  case 2:
    console.log('Martes');
    break;
  case 3:
    console.log('Miercoles');
    break;
  case 4:
    console.log('Jueves');
    break;
  case 5:
    console.log('Viernes');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('No es un dia de la semana');
}
