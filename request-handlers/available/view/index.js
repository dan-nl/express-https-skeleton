'use strict'

var appContext = require( './app' )
var defaultContext = require( './default' )
var path = require( 'path' )

/**
 * @link https://expressjs.com/en/guide/using-template-engines.html
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  app.set( 'views', path.join( __dirname, '..', '..', '..', 'views' ) )
  app.set( 'view engine', 'hjs' )
  app.use( defaultContext )
  app.use( appContext )
}

module.exports = requestHandler
