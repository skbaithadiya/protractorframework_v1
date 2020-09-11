'use strict';
const excelToJson = require('convert-excel-to-json');
var logger = require('./logger');
var log = logger.logger();

module.exports = function(filename, sheetname) {

    let result = excelToJson({
        sourceFile: filename,
        header:{
            rows: 1
        },
        columnToKey: {
            '*': '{{columnHeader}}'
        },
        sheets: [sheetname]
    });
    log.info(`Reading data from file: ${filename} and sheet: ${sheetname}`)
    log.info(result);
    return result;
    
}