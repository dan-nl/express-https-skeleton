'use strict'

var fileExists = require( 'file-exists' )
var path = require( 'path' )

var config_path = path.join( __dirname, 'config.js' )

if ( !fileExists.sync( config_path ) ) {
  throw new Error(
    'config {} ( %path ) does not exist. copy the example that’s in the same directory without the .example suffix'
      .replace( '%path', config_path )
  )
}

module.exports = require( './config' )
