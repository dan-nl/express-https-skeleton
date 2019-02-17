/* eslint global-require: off */

'use strict'

var getDirectoryFileListSync = require( 'get-directory-file-list-sync' )

/**
 * @link http://expressjs.com/en/api.html#app.use
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandlers( app ) {
  getDirectoryFileListSync( __dirname ).forEach(
    function ( handler ) {
      if ( handler !== 'index.js' ) {
        require( './' + handler )( app )
      }
    }
  )
}

module.exports = requestHandlers
