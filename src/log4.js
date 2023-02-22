import log4js from "log4js";

log4js.configure({
    appenders:{
        consola:{type: "console"},
        archivoErrores: {type: 'file', filename: "errores.log"},
        archivosDebug: {type: 'file', filename: 'debug.log'},
        loggerConsola: {type: 'logLevelFilter', appender: 'consola', level:'debug'},
        loggerArchivosErrores: {type: 'logLevelFilter', appender: 'archivosErrores', level: 'error'},
        loggerArchivosDebug: {type: 'logLevelFilter', appender: 'archivosDebug', level: 'debug'},
    },
    categories: {
        default: {
            appenders: ['loggerConsola'], level: 'all'
        },
        prod: {
            appenders: ['loggerArchivosErrores', ''], level: 'all'
        }
    }
});

let logger = null

if('PROD') {
    logger = log4js.getLogger('prod');
}else{
    logger = log4js.getLogger();
}

module.exports = logger;