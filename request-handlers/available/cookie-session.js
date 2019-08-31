/* eslint max-len: off */

'use strict'

var config = require( '../../config/cookie' )
var cookieSession = require( 'cookie-session' )

/**
 * a simple session handler
 *
 * adds
 * `req.sessionCookies`
 * `req.sessionOptions`
 * `req.sessionKey`
 * `req.session`
 *
 * @link https://www.npmjs.com/package/cookie-session
 * @link https://blog.pablobm.com/post/168396226345/keep-it-simple-express-session-vs-cookie-session
 * @link https://stackoverflow.com/questions/23566555/whats-difference-with-express-session-and-cookie-session#answer-23566934
 *
 * note, only use one of the following: cookie-parser, cookie-session, or session
 *
 * @param {Function} app
 * @param {Function} app.use
 *
 * @returns {undefined}
 */
function requestHandler( app ) {
  var cookie_config = {
    expires: config.expires,
    keys: config.keys,
    maxAge: config.maxAge
  };

  app.use( cookieSession( cookie_config ) )
}

module.exports = requestHandler
