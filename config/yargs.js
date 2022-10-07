/* Yargs options para la documentación */


const argv = require('yargs')

           // ENTRADAS 
            .option('n',{
                alias: 'nombre',
                type: 'string',
                demandOption: true,
                describe: 'Nombre del interesado al prestamo'
            })

            .option('d', {
                alias: 'direccion',
                type: 'string',
                demandOption: true,
                describe: 'Dirección de la persona',
                
            })

            .option('t',{
                alias: 'telefono',
                type: 'number',
                demandOption: true,
                describe: 'Numero telefonico de la persona'
            })
            .option('v',{
                alias:'DPI',
                type: 'number',
                demandOption: true,
                describe: 'Identificación de la persona'
            })

            //Verificar que -t = Telefono y v- DPI sean datos numéricos

             .check((argv, options ) =>{
                if(isNaN( argv.t, argv.v)){
                    throw 'Debe de ingresar datos numerico'
                }
            
                return true;
            })
            

            .option('c',{
            alias: 'Capital',
            type: 'number',
            demandOption: true,
            describe: 'Monto del préstamo '
            })

            .option('z',{
                alias: 'Interes',
                type:'number',
                demandOption: true,
                describe: 'Tasa de interes % anual'              

            })
            .option('a',{
                alias:'Plazo',
                type: 'number',
                demandOption: true,
                describe:'Periodo en años '

            })
            
        


//SALIDAS PARA LISTAR EN CONSOLA  E IMPRIMIR EN PDF
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
               describe: 'Listar los datos en consola'
                //default: false


            })
            .option('p',{
                alias: 'imprimir',
                type: 'boolean',
                demandOption: true,
                describe: 'Para imprimir los resultados en pdf'
            })
            
           
            .argv

module.exports = argv;