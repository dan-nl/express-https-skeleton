'use strict';

// var bodyParser = require( './body-parser' )
// var compression = require( './compression' )
// var cookieParser = require( './cookie-parser' )
// var cookieSession = require( './cookie-session' )
var emptyFavicon = require( './empty-favicon' )
var logger = require( './logger' )
// var passport = require( './passport' )
// var sass = require( './sass' )
// var session = require( './session' )
var view = require( './view/index' )

/**
 * @link http://expressjs.com/en/api.html#app.use
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandlers( app ) {
  logger( app )
  // bodyParser( app )

  // use only one of these
  // cookieParser( app )
  // cookieSession( app ) // use for simple session handling
  // session( app ) // use for more complex, robust session handling

  // passport( app )

  // sass( app )
  // compression( app )
  emptyFavicon( app )
  view( app )
}

module.exports = requestHandlers
