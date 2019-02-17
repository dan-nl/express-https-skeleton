'use strict'

var passport = require( 'request-handlers/available/passport' )

/**
 * adds
 * `req._passport`
 *
 * @link https://www.npmjs.com/package/passport
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  app.use( passport.initialize() )
  app.use( passport.session() )
}

module.exports = requestHandler
