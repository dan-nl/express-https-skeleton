'use strict'

var cookieParser = require( 'cookie-parser' )

/**
 * adds
 * `req.secret`
 * `req.cookies`
 * `req.signedCookies`
 *
 * @link https://www.npmjs.com/package/cookie-parser
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  app.use( cookieParser() )
}

module.exports = requestHandler
