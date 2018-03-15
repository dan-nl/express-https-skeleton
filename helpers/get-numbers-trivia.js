'use strict';

var getGenericRequestOptions = require( 'generic-request-options' )
var getRequestAsBluebird = require( 'request-as-bluebird' )

/**
 * demonstrates how one might make a call to an external service
 *
 * @returns {Promise<{body: string, response: IncomingMessage}>|Promise}
 */
function getNumbersTrivia() {
  var request_options = {
    url: 'http://numbersapi.com/random?json'
  }

  return getRequestAsBluebird( getGenericRequestOptions( request_options ) )
}

module.exports = getNumbersTrivia
