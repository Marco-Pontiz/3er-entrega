import log4js from 'log4js';

log4js.configure({
    appenders: {
        consola: {type:'console'},
        archivoErrores:{type: 'file', filname: 'errores.log'},
        archivosDebug:{type: 'file', filename: 'debug.log'},
        loggerConsola:{type: 'logLevelFilter', appender: 'consola', level: 'debug'},
        loggerArchivoErrores:{type: 'logLevelFilter', appender:'archivoErrores', level:'error'},
        loggerArchivosDebug: {type: 'logLevelFilter', appender: 'archivoDebug', level:'debug'},
    },
    categories: {
        default:{
            appenders: ['loggerConsola'], level: 'info'
        },
        prod: {
            appenders: ['loggerArchivosErrores', 'loggerArchivosDebug'], level: 'all'
        }

    }
});

let logger = null

if('PROD') {
    logger = log4js.getLogger('prod');
} else {
    logger = log4js.getLogger();
}

module.exports = logger;