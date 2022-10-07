const createFile = require("./helpers/pdfGenerator");
const { docDefinition } = require("./helpers/pdfContent");
const argv = require("./config/yargs");
const printConsole = require("./helpers/printConsole");

//Funcion para imprimir en consola
printConsole(argv.l);

//Funcion para crear el PDF
createFile(docDefinition, argv.p);
