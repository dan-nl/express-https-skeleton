/* eslint global-require: off */
/* eslint new-cap: off */

'use strict'

var csurf = require( './csurf/index' )
var express = require( 'express' )
var router = express.Router()
var getDirectoryFileList = require( 'get-directory-file-list' )

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

  getDirectoryFileList( __dirname )
    .then(
      /**
       * process the file list from the router directory
       * @param {Array} files
       *
       * @returns {undefined}
       */
      function ( files ) {
        files.forEach(
          /**
           * process each routing file
           * @param {string} file
           *
           * @returns {undefined}
           */
          function ( file ) {
            if ( file !== 'index.js' ) {
              require( './' + file )( routing_options );
            }
          }
        )
      }
    )
    .catch(
      /**
       * @param {Error} err
       *
       * @returns {undefined}
       */
      function ( err ) {
        console.error( err )
      }
    )

  app.use( router )
  app.use( express.static( 'public' ) )
}

module.exports = addRoutes
