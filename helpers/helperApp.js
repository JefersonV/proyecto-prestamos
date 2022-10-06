const fs = require('fs')
const fill = require('fill-range');
/* Archivo para modular la lógica*/
const crearPrestamo = async(nombre='someone', apellido='example', dpi=1234567890123, nit='12345678',monto=100000,intAnual=0.5, periodo=5, tabla=[]) => {
// **** Entradas *****
// Capital (monto del préstamo)
// Interés anual %
// Período en años (plazo)
// Datos del cliente (nombre, apellido, dpi, nit)
  let mesesArray = []
  let saldoArray = []
  let amortizacionArray = []
  let auxArray = []
  let interesesArray = []
  let totalArray = []
  saldoArray.push(monto)

  try {
    // **** Proceso ****
    let meses = periodo * 12
    let resultadoAmortizacion
    // meses
    for (let i = 0; i<=meses; i++) {
      mesesArray.push(i)
    }
    
    // Amortización de capital
    // Amortización = monto / cantidad de meses (es una constante)
    for (let i = 0; i<=meses; i++) {
      resultadoAmortizacion = monto/meses
      amortizacionArray.push(resultadoAmortizacion)
    }

    // Aux
    /* for (let i = 0; i<=meses; i++) {
      //console.log(amortizacionArray[i])
      let nuevoSaldo = 0
      nuevoSaldo += amortizacionArray[i]
      if(i > 0) {

      }
      auxArray.push(nuevoSaldo)
      
    } */
    for (let i = 0; i<=meses; i++) {
      let valor = monto
      while(valor >= resultadoAmortizacion ) {
        const nuevo = valor -= resultadoAmortizacion
        auxArray.push(nuevo)
      }
    }
    
    let resultadoSaldo = auxArray.reduce((a,e) => {
      if(!a.find(d => d == e)) {
        a.push(e)
      }
      return a;
    }, [])


    console.log(resultadoSaldo)
    //Saldo
    // Saldo = saldo [i] - amortización de capital
/*     for (let i=0; i<=meses; i++) {
      let saldoRestante = monto-resultadoAmortizacion
      let nuevoSaldo
      saldoArray.push(nuevoSaldo)
    } */

    // intereses pagados
    // Intereses pagados varía = Saldo pendiente / porcentaje mensual (hay que iterar)
    const algo = fill('0', monto, resultadoAmortizacion)
    console.log(algo)
    //Total
    // Total = amortización + intereses pagados
    /* for (let i=0; i<=meses; i++) {

    } */

    tabla = [{mesesArray},{amortizacionArray},{resultadoSaldo}]

  return tabla
  }catch(err) {
    throw err
  }
}

module.exports = {
  crearPrestamo
}