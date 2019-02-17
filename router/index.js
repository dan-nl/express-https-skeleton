/* eslint global-require: off */
/* eslint new-cap: off */

'use strict'

var csurf = require( './options/csurf' )
var express = require( 'express' )
var router = express.Router()
var getDirectoryFileListSync = require( 'get-directory-file-list-sync' )

/**
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function addRoutes( app ) {
  var routing_options = {
    csurf: csurf,
    router: router
  }

  getDirectoryFileListSync( __dirname ).forEach(
    function ( handler ) {
      if ( handler !== 'index.js' ) {
        require( './' + handler )( routing_options )
      }
    }
  )

  app.use( router )
  app.use( express.static( 'public' ) )
}

module.exports = addRoutes
