/* Archivo de ejecución y validación del mini programa */


const argv = require('./config/yargs')

console.clear();

console.log(argv);

const { crearPrestamo } = require('./helpers/helperApp')

console.clear()

crearPrestamo()
  .then(tabla => console.log(tabla , 'creado'))
  .catch(err => console.log(err))