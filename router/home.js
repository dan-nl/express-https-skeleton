'use strict'

var get = require( '../route-handlers/home/get' )

/**
 * @param {Object} options
 *
 * @returns {undefined}
 */
function route( options ) {
  options.router.get( '/', get )
}

module.exports = route
