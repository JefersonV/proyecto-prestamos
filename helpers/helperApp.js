const fs = require('fs')
/* Archivo para modular la lógica*/
const crearPrestamo = async(nombre='someone', apellido='example', dpi=1234567890123, nit='12345678',monto=100000,intAnual=0.0525, periodo=5, tabla=[]) => {
// **** Entradas *****
// Capital (monto del préstamo)
// Interés anual %
// Período en años (plazo)
// Datos del cliente (nombre, apellido, dpi, nit)
  let mesesArray = []
  let saldoArray = []
  let amortizacionArray = []
  let interesesArray = []
  let totalArray = []
  saldoArray.push(monto)

  try {
    // Meses sirve para saber la cantidad de veces a iterar
    let meses = periodo * 12
    // **** Meses ****
    for (let i = 1; i<=meses; i++) {
      mesesArray.push(i)
    }
    
    // **** Amortización de capital ****
    // Amortización = monto / cantidad de meses (es una constante)
    let resultadoAmortizacion
    for (let i = 1; i<=meses; i++) {
      resultadoAmortizacion = monto/meses
      amortizacionArray.push(resultadoAmortizacion)
    }
    // **** Saldo ****
    // Saldo = saldo [i] - amortización de capital
    for (let i = 0; i<=meses; i++) {
      let valor = monto
      // Desde el monto inicial hasta 0
      while(valor >= resultadoAmortizacion ) {
        const nuevo = valor -= resultadoAmortizacion
        saldoArray.push(nuevo)
      }
    }
    
    saldoArray.push(0)
    // deja solo los valores que no se repiten
    let resultadoSaldo = saldoArray.reduce((a,e) => {
      if(!a.find(d => d == e)) {
        a.push(e)
      }
      return a;
    }, [])

    // intereses pagados
    // Intereses pagados varía = Saldo pendiente * porcentaje mensual (hay que iterar)
    for (let i = 0; i<=meses; i++) {
      let interes = 0
      interes = (resultadoSaldo[i] * intAnual) / 12
      interesesArray.push(interes)
    }
    //Total
    // Total = amortización + intereses pagados
    for (let i=1; i<=meses; i++) {
      let total = 0
      total = interesesArray[i-1] + resultadoAmortizacion
      totalArray.push(total)
    }

    tabla = [{mesesArray},{amortizacionArray},{resultadoSaldo},{interesesArray},{totalArray}]

  return tabla
  }catch(err) {
    throw err
  }
}

module.exports = {
  crearPrestamo
}