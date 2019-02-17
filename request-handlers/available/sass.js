'use strict'

var path = require( 'path' )
var sass = require( 'node-sass-middleware' )

/**
 * @link https://www.npmjs.com/package/node-sass-middleware
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  var config = {
    debug: false,
    dest: path.join( __dirname, '..', '..', '..', 'public', 'css' ),
    includePaths: [
      path.join( __dirname, '..', '..', '..', 'node_modules' )
    ],
    outputStyle: 'compressed',
    prefix: '/css',
    sourceMap: false,
    src: path.join( __dirname, '..', '..', 'assets', 'scss' )
  };

  app.use( sass( config ) )
}

module.exports = requestHandler
