(function () {

    'use strict';

    var MailListener = require("mail-listener2");
    var path = require('path');
    var fs = require('fs');
    var config = require('./config/mail-config');
    var logger = require('./config/log');
    var _ = require('underscore');
    var globalConfig = require('./config/global-config');
    var fileUtils = require('./utils/file-utils');

    var mailListener = new MailListener(config);
    mailListener.start();

    mailListener.on("server:connected", function () {
        logger.info('Imap connected');
    });

    mailListener.on("server:disconnected", function () {
        logger.info('Imap Disconnected');
    });

    mailListener.on("error", function (err) {
        logger.error('Error occured when trying to connect to imap!');
    });

    mailListener.on("mail", function (mail, seqno, attributes) {
        logger.info('mail received from ', mail.headers.from);
        logger.info('mail subject is ', mail.headers.subject);
        _.each(mail.attachments, function (attachment) {
            var destinationFolder = getDestinationFolderFromMailSubject(mail.headers.subject);
            fileUtils.moveFile(attachment.generatedFileName,
                attachment.fileName,
                destinationFolder);
        });
    });

    function getDestinationFolderFromMailSubject(subject) {
        var destinationFolder;
        switch (subject) {
            case 'PURCHASE':
                destinationFolder = globalConfig.PURCHASE;
                break;
            case 'SALE':
                destinationFolder = globalConfig.SALE;
                break;
            default:
                destinationFolder = globalConfig.OTHERS;
                break;
        }

        return destinationFolder;
    }
})();