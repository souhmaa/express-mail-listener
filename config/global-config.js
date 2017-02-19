(function () {

    'use strict';

    var path = require('path');
    var _ = require('underscore');
    var fileUtils = require('../utils/file-utils');

    var conf = {
        DATA: 'data',
        PURCHASE: 'PURCHASE',
        SALE: 'SALE',
        OTHERS: 'OTHERS'
    };

    function purchase() {
        return path.join(__dirname, '..', conf.DATA, conf.PURCHASE);
    }

    function sale() {
        return path.join(__dirname, '..', conf.DATA, conf.SALE);
    }

    function others() {
        return path.join(__dirname, '..', conf.DATA, conf.OTHERS);
    }

    var directories = {
        SALE: sale(),
        PURCHASE: purchase(),
        OTHERS: others()
    }

    function init() {
        fileUtils.createFolderPath(directories.SALE);
        fileUtils.createFolderPath(directories.PURCHASE);
        fileUtils.createFolderPath(directories.OTHERS);
        module.exports = directories;
    }

    init();

})();