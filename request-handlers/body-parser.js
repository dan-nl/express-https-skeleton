'use strict'

var bodyParser = require( 'body-parser' )

/**
 * adds
 * `req.body`
 *
 * @link https://www.npmjs.com/package/body-parser
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  app.use( bodyParser.urlencoded( { extended: false } ) )
  app.use( bodyParser.json() )
}

module.exports = requestHandler
