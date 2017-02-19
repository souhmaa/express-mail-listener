(function () {

    'use strict';

    var winston = require('winston');
    var path = require('path');

    var filename = path.join(process.env.NODE_LOG_PATH, 'created-logfile.log');
    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                filename: filename
            })
        ]
    });

    module.exports = logger;

})();