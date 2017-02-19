(function() {

    'use strict';

    module.exports = {
        username: "your gmail",
        password: "gmail password",
        host: "imap.gmail.com",
        port: 993,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
        mailbox: "INBOX",
        markSeen: true,
        fetchUnreadOnStart: true,
        debug: console.log,
        attachments: true
    }

})();