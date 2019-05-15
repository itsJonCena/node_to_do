let descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea.'
};

const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea creada.', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tereas creadas.', {

    })
    .command('borrar', 'Borrar una tarea.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}