'use strict';

var qs = require('querystring');
var makeRequest = require('./makeRequest');

var BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

module.exports = function (query) {
	return makeRequest({
		url: BASE_URL + '?' + qs.stringify({ q: query }),
		json: true
	});
};