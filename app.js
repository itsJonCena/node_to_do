const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear una nueva tarea');
        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        break;

    case 'listar':
        let listaTareas = porHacer.listar();
        for (let tarea of listaTareas) {
            console.log('===== Por hacer ====='.green);
            console.log(tarea.descripcion);
            console.log("Completado: ",tarea.completado);
            console.log('=====================\n'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualizado: ', actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(`Tarea ${argv.descripcion} borrada: `,borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}