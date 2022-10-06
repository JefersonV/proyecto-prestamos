const fs = require('fs')
/* Archivo para modular la lógica*/
const crearPrestamo = async(nombre='someone', apellido='example', dpi=1234567890123, nit='12345678',monto=50000,intAnual=0.5, periodo=5, tabla=[]) => {
// Es una calculadora para el usuario general?
// **** Entradas *****
// Capital (monto del préstamo)
// Interés anual %
// Período en años (plazo)
// Datos del cliente (nombre, apellido, dpi, nit)
  tabla = [
    {
      meses: []
    },
    {
      intereses: []
    },
    {
      amortizacion: []
    },
    {
      total: []
    },
    {
      saldo: []
    }
  ]
  try {
    // **** Proceso ****

    // Amortización = capital / cantidad de meses (es una constante)
    // Intereses pagados varía = Saldo pendiente / porcentaje mensual (hay que iterar)
    // Total = amortización + intereses pagados
    let resultado = ''
    let meses = periodo * 12
    let resultadoAmortizacion = 0
    // meses
    for (let i = 0; i<=meses; i++) {
      tabla[0].meses.push(i)
    }
    
    // Amortización de capital
    for (let i = 0; i<=meses; i++) {
      resultadoAmortizacion = monto/meses
      tabla[2].amortizacion.push(resultadoAmortizacion)
    }

    //Saldo
    // Saldo = saldo [i] - amortización de capital
    for (let i=0; i<=meses; i++) {
      //let saldoRestante = monto-resultadoAmortizacion
      tabla[4].saldo.push(monto-833.33)
    }
    

    // intereses pagados
  /*   for(let i = meses; i>=0; i--) {
      const resultadoInteres = monto - 
      tabla[1].intereses.push(resultadoInteres)
    }
     */
    //Total
/*     for (let i=0; i<=meses; i++) {

      tabla[3].total.push()
    }
 */

    console.log(tabla.meses)
    console.log(resultadoAmortizacion)
    // **** Salida ****
    // Datos del cliente en modo de tabla (estilo encabezado de un documeto)
    /* Mes -> desde el mes 0 
    Interesese pagados -> cuánto se paga por mes 
    Amortización de capital -> Devolución del dinero prestado sin contar los intereses 
    Total ->  intereses pagados + amortización
    Saldo -> Cuánto queda pendiente de la deuda.
    */
  return tabla
  }catch(err) {
    throw err
  }
  // equivalea a el .resolve
}

module.exports = {
  crearPrestamo
}