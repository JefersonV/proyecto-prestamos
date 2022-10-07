const colors = require("colors");
const { solicitante, prestamo } = require("./pdfContent");
const info = require("./fillData");

const printConsole = (listar = false) => {
  if (listar) {
    console.log(
      colors.blue(
        "--------------------------------------------------------------------------"
      )
    );
    console.log(
      colors.blue("|") +
        colors.magenta(
          "                       PRESTAMO SOBRE SALDOS                            " +
            colors.blue("|")
        )
    );
    console.log(colors.blue("    Nombre:     ") + `${solicitante.nombre}`);
    console.log(colors.blue("    Direccion:  ") + `${solicitante.direccion}`);
    console.log(colors.blue("    Telefono:   ") + `${solicitante.telefono}`);
    console.log(colors.blue("    DPI:        ") + `${solicitante.dpi}`);
    console.log("\n");
    console.log(colors.blue("    Monto:            ") + `${prestamo.monto}`);
    console.log(colors.blue("    Intereses:        ") + `${prestamo.interes}%`);
    console.log(
      colors.blue("    Periodo:          ") + `${prestamo.periodo} años`
    );
    console.log(
      colors.blue("    Periodo en meses: ") + `${prestamo.periodo * 12} meses`
    );
    console.log(
      colors.blue(
        "--------------------------------------------------------------------------"
      )
    );
    console.log(
      colors.magenta(
        "                        Tabla de Prestamo sobre Saldos                    "
      )
    );
    console.log(colors.blue("\n"));
    console.log(
      colors.green(
        "     MES         INTERESES       AMORTIZACIÓN        TOTAL       SALDO    "
      )
    );

    //   for (let i = 1; i < data.length; i++) {
    //     console.log(data[i].mes);
    //     console.log(data[i].intereses);
    //     console.log(data[i].amortizacion);
    //     console.log(data[i].total);
    //     console.log(data[i].saldo);
    //   }

    //Imprimir ROWS de la tabla
    for (let i = 1; i < info.length; i++) {
      console.log(
        "     " +
          info[i][0] + //mes
          "           Q." +
          info[i][1] + //intereses
          "          Q." +
          info[i][2] + //amortizacion
          "              Q." +
          info[i][3] + //total
          "      Q." +
          info[i][4] //saldo
      );
    }

    //Imprimir ROWS de la tabla
    //   console.log(
    //     "     " +
    //       info[1][0] + //mes
    //       "           Q." +
    //       info[1][1] + //intereses
    //       "          Q." +
    //       info[1][2] + //amortizacion
    //       "              Q." +
    //       info[1][3] + //total
    //       "      Q." +
    //       info[1][4] //saldo
    //   );
  }
};

module.exports = printConsole;
