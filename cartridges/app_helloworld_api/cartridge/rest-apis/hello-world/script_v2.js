'use strict';

var RESTResponseMgr = require('dw/system/RESTResponseMgr');

exports.getHelloWorldMessage = function () {
    // eslint-disable-next-line no-undef
    var userName = request
        .getHttpParameterMap()
        .get('c_name')
        .getStringValue();

    var resObj = {
        message: 'Hello ' + userName + ' welcome to the World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.getHelloWorldMessage.public = true;