'use strict'

var cookieParser = require( 'request-handlers/available/cookie-parser' )

/**
 * adds
 * `req.secret`
 * `req.cookies`
 * `req.signedCookies`
 *
 * @link https://www.npmjs.com/package/cookie-parser
 *
 * note, only use one of the following: cookie-parser, cookie-session, or session
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
