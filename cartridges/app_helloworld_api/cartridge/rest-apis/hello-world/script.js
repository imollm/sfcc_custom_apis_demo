'use strict';

var RESTResponseMgr = require('dw/system/RESTResponseMgr');

exports.getHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.postHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.putHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.patchHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.deleteHelloWorldMessage = function () {
    var resObj = {
        message: 'Hello World!'
    };

    RESTResponseMgr.createSuccess(resObj).render();
};

exports.getHelloWorldMessage.public = true;
exports.postHelloWorldMessage.public = true;
exports.putHelloWorldMessage.public = true;
exports.patchHelloWorldMessage.public = true;
exports.deleteHelloWorldMessage.public = true;