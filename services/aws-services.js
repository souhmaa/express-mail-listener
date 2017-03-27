(function () {

    'use strict';

    var AWS = require('aws-sdk');
    var awsConfig = require('../config/aws-config');

    AWS.config.update(awsConfig.credentials);

    var s3 = new AWS.S3();

    var params = {
        Bucket: awsConfig.bucketname,
        Key: 'test/mykey.txt',
        Body: "HelloWorld"
    };

    module.exports = {

        put: function (key, content, metadata, success, error) {
            var params = {
                Bucket: awsConfig.bucketname,
                Key: key,
                Body: content,
                Metadata: metadata
            }

            s3.putObject(params, function (err, res) {
                if (err) {
                    error(err);
                } else {
                    success();
                }
            });

        }

    };




})();