const argv = require("../config/yargs");
const styles = require("./styles");
const info = require("./fillData");

//Objeto Datos personales del solicitante
const solicitante = {
  nombre: "",
  direccion: "",
  telefono: "",
  dpi: "",
};

//Objeto informacion del prestamo
const prestamo = {
  monto: 0,
  interes: 0,
  periodo: 0,
};

const llenarSolicitante = (
  nombre = "",
  direccion = "",
  telefono = 0,
  dpi = 0
) => {
  solicitante.nombre = nombre;
  solicitante.direccion = direccion;
  solicitante.telefono = telefono;
  solicitante.dpi = dpi;
};

const llenarPrestamo = (monto = 20000, interes = 4, periodo = 2) => {
  prestamo.monto = monto;
  prestamo.interes = interes;
  prestamo.periodo = periodo;
};

//Falta crear los yargs para capturarlos desde aqui
llenarSolicitante(argv.n, argv.d, argv.t, argv.v);
llenarPrestamo(argv.catch, argv.z, argv.a);

//Contenido de la tabla la tabla
const docDefinition = {
  content: [
    { text: "PRESTAMO SOBRE SALDOS", style: "header" },
    "\n",
    "\n",
    { text: `Nombre: ${solicitante.nombre}`, style: "label" },
    { text: `Dirección: ${solicitante.direccion}`, style: "label" },
    { text: `Teléfono: ${solicitante.telefono}`, style: "label" },
    { text: `Teléfono: ${solicitante.dpi}`, style: "label" },
    "\n",
    { text: `Monto: Q.${prestamo.monto}`, style: "label" },
    { text: `Intereses: ${prestamo.interes}%`, style: "label" },
    { text: `Periodo: ${prestamo.periodo} años`, style: "label" },
    {
      text: `Periodo en meses: ${prestamo.periodo * 12} meses`,
      style: "label",
    },
    "\n",
    {
      layout: "lightHorizontalLines", // optional
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: ["*", "auto", 100, "*", "*"],

        body: info,
        // body: [
        //   [
        //     { text: "Mes", bold: true },
        //     { text: "Intereses", bold: true },
        //     { text: "Amortización", bold: true },
        //     { text: "Total", bold: true },
        //     { text: "Saldo", bold: true },
        //   ],
        //   info,
        //   // ["Prueba", "Value 2", "Value 3", "Value 4", "Hola"],
        // ],
      },
    },
  ],
  defaultStyle: {
    font: "Times",
  },
  styles: styles,
};

module.exports = { solicitante, prestamo, docDefinition };
