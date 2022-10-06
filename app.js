/* Archivo de ejecución y validación del mini programa */
const { crearPrestamo } = require('./helpers/helperApp')

console.clear()

crearPrestamo()
  .then(tabla => console.log(tabla , 'creado'))
  .catch(err => console.log(err))