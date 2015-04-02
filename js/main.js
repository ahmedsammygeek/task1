

$(function () {
    'use strict';

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: 'server/php/',
        maxFileSize: 50000000000000000,
            minFileSize: 0,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png|rar|zip|pdf|txt|doc|docx|sql|ppt|html|php)$/i
    });
});

