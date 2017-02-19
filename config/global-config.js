(function () {

    'use strict';

    var path = require('path');

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
    
    module.exports = directories;

})();