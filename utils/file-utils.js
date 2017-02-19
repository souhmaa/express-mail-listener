(function () {

    'use strict';

    var mkdirp = require('mkdirp');
    var logger = require('../config/log');
    var path = require('path');
    var fs = require('fs');

    module.exports = {

        createFolderPath: function (folder) {
            mkdirp.sync(folder);
            logger.info('folder ', folder, ' is created');
        },

        moveFile: function (originFile, newFileName, destination) {
            var newFile = path.join(destination, newFileName);
            fs.rename(originFile, newFile, function (err) {
                if (err) {
                    logger.error('error occured when trying to move file', err);
                    throw err;
                }

                logger.info('File moved successfully!');
            });
        }
    }
})();
