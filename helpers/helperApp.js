const fs = require('fs')
/* Archivo para modular la lógica*/
const crearPrestamo = async(nombre='someone', apellido='example', dpi=1234567890123, nit='12345678',telefono='7762-0000', direccion='Panajachel zona 4 av. Santander', monto=100000,intAnual=0.0525, periodo=5, tabla=[], listar = true) => {
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
      resultadoAmortizacion = (monto/meses).toFixed(2)
      amortizacionArray.push(resultadoAmortizacion)
    }
    // **** Saldo ****
    // Saldo = saldo [i] - amortización de capital
    for (let i = 0; i<=meses; i++) {
      let valor = monto
      // Desde el monto inicial hasta 0
      while(valor >= resultadoAmortizacion ) {
        const nuevo = (valor -= resultadoAmortizacion).toFixed(2)
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
      interes = ((resultadoSaldo[i] * intAnual) / 12).toFixed(2)
      interesesArray.push(interes)
    }
    //Total
    // Total = amortización + intereses pagados
    for (let i=1; i<=meses; i++) {
      let total = 0
      total = interesesArray[i-1] + resultadoAmortizacion
      totalArray.push(total)
    }
    if(listar) {
      console.log('-------------------------------')
      console.log('|Préstamo sobre saldos')
      console.log('-------------------------------')
      console.log(`|Nombre: ${nombre} ${apellido}`)
      console.log(`|DPI: ${dpi} NIT: ${nit}`)
      console.log(`|Dirección: ${direccion}`)
      console.log(`|Teléfono: ${telefono}`)
      console.log('-------------------------------')
      console.log(`|Monto del préstamo: ${monto}`)
      console.log(`|Porcentaje de Interés: ${intAnual}`)
      console.log(`|Período: ${periodo} años`)
      console.log(`|Período en meses: ${meses}`)
      console.log('-------------------------------')
      console.log('|Mes|Intereses pagados |Capital amortizado | Total | Saldo |')
      for(let i = 0; i<=meses; i++) {
        console.log(`|${mesesArray[i]}   |${interesesArray[i]}          |${amortizacionArray[i]}     | ${totalArray[i]}    |${resultadoSaldo[i]    }|`)
      }
    }
    // tabla = [{mesesArray},{amortizacionArray},{resultadoSaldo},{interesesArray},{totalArray}]
    /* let tabla2 = []
    for(let i = 0; i<=meses; i++) {
      tabla2 = {
        mes: mesesArray[i]
      }
    } */

    // console.log(tabla2)
  return tabla
  }catch(err) {
    throw err
  }
}

module.exports = {
  crearPrestamo
}