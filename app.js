/* Archivo de ejecución y validación del mini programa */
const createFile = require("./helpers/pdfGenerator");
const { docDefinition } = require("./helpers/pdfContent");
const argv = require("./config/yargs");
const printConsole = require("./helpers/printConsole");

console.clear();

console.log(argv);

const { crearPrestamo } = require("./helpers/helperApp");

console.clear();

crearPrestamo()
  .then((tabla) => console.log(tabla, "creado"))
  .catch((err) => console.log(err));

//Funcion para imprimir en consola
printConsole(argv.l);

//Funcion para crear el PDF
createFile(docDefinition, argv.p);
