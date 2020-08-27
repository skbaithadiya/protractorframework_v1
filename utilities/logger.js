module.exports = {
    logger: function(){
        const log4js = require("log4js");
        log4js.configure({
            appenders: {
                protractor: { type: "file", filename: `logs/test_execution.log` }
            },
            categories: { default: { appenders: ["protractor"], level: "info" } }
        });
        const logger = log4js.getLogger("protractor");
        return logger
    },
    loggerFile: function(filename){
        const log4js = require("log4js");
        log4js.configure({
            appenders: {
                protractor: { type: "file", filename: `logs/${filename}` }
            },
            categories: { default: { appenders: ["protractor"], level: "info" } }
        });
        const logger = log4js.getLogger("protractor");
        return logger
    }
}

