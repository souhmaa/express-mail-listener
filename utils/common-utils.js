(function () {

    'use strict';

    var _ = require('underscore');
    var stringUtils = require('../utils/string-utils');
    var LOGGER = require('../config/log');

    module.exports = {

        getDestinationFolderFromMailSubject: function (mailSubject) {
            LOGGER.info("Mail subject is " + mailSubject);
            var destinationFolder;
            switch (mailSubject) {
                case 'PURCHASE':
                    destinationFolder = 'PURCHASE/';
                    break;
                case 'SALE':
                    destinationFolder = 'SALE/';
                    break;
                default:
                    destinationFolder = 'OTHERS/';
                    break;
            }

            LOGGER.info("Destination folder is " + destinationFolder);
            return destinationFolder;
        },

        getMetadata: function (mailBody) {
            LOGGER.info("Mail Body is " + mailBody);
            if (!mailBody) {
                return {};
            }
            var metadata = {};
            var mailLines = stringUtils.split(mailBody, '\n');
            _.each(mailLines, function (line) {
                if (line.startsWith('metadata:')) {
                    var splitted = stringUtils.split(line, ':');
                    if (splitted.length === 3) {
                        metadata[splitted[1]] = splitted[2];
                    }
                }
            });

            LOGGER.info("Metadata is ...");
            LOGGER.info(metadata);
            return metadata;
        }
    };
})();