'use strict';

var request = require('request');
var q = require('q');

var makeRequestPromise = function (options) {
	var defer = q.defer();
	request(options, function (err, response, body) {
		if (err) { return defer.reject(err); }
		return defer.resolve(body);
	});
	return defer.promise;
};

module.exports = makeRequestPromise;