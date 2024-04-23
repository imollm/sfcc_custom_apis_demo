'use strict';

var RESTResponseMgr = require('dw/system/RESTResponseMgr');

exports.getHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.getHelloWorldMessage.public = true;
