'use strict';

var request = require('request');
var q = require('q');

var makeRequestPromise = function (options) {
	var defer = q.defer();
	request(options, defer.makeNodeResolver());
	return defer.promise;
};

module.exports = makeRequestPromise;