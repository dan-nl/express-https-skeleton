'use strict'

var get = require( '../route-handlers/spa/get' )

/**
 * @param {Object} options
 *
 * @returns {undefined}
 */
function route( options ) {
  options.router.get( '/spa', get )
}

module.exports = route
