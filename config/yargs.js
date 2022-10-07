/* Yargs options para la documentación */
const argv = require("yargs")
  .option("n", {
    alias: "nombre",
    type: "string",
    demandOption: true,
    describe: "Nombre del solicitante",
  })
  .option("p", {
    alias: "pdf",
    type: "boolean",
    demandOption: false,
    describe: "Para generar el PDF",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: false,
    describe: "Para imprimir en consola",
  }).argv;

//   .check((argv, options) => {
//     if (isNaN(argv.m)) {
//       throw "nombre ome";
//     }
//     return true;
//   }).argv;

module.exports = argv;
