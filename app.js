const { crearArchivo, mostrarArchivoCreado } = require('./tabla');
const args = require('./config/yargs');
const color = require('colors');

if (args.b) {
    crearArchivo(args.b)
    .then( nombreArchivo => console.log(`Se ha creado el archivo ${nombreArchivo}`)
    )
    .catch(e => console.log('ERROR: '.red + e));
}

if (args.l) {
    console.log(`Mostrando la tabla de base: ${args.b} \n`.green +  mostrarArchivoCreado(args.b).rainbow);
}