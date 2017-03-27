(function() {

    'use strict';

    module.exports = {
        username: "email.address@localhost",
        password: "mail_password",
        host: "imap.gmail.com",
        port: 993,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
        mailbox: "INBOX",
        markSeen: true,
        fetchUnreadOnStart: true,
        debug: console.log,
        mailParserOptions: {streamAttachments: true},
        attachments: true
    }

})();