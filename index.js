(function () {

    'use strict';

    var MailListener = require("mail-listener2");
    var config = require('./config/mail-config');
    var logger = require('./config/log');
    var _ = require('underscore');
    var awsService = require('./services/aws-services');
    var commonUtils = require('./utils/common-utils');

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
            var destinationFolder = commonUtils.getDestinationFolderFromMailSubject(mail.headers.subject);
            var key = destinationFolder + attachment.fileName;
            var metadata = commonUtils.getMetadata(mail.text);
            awsService.put(key, attachment.content, metadata, function () {
                logger.info('Successfully uploaded data');
            }, function(err) {
                logger.error('Could not upload object in S3 bucket');
            });
        });
    }, function (err) {
        logger.error(err);
    });
})();