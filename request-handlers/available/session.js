/* eslint max-len: off */

'use strict'

var session = require( 'express-session' )

/**
 * a more complex session handler
 *
 * adds
 * `req._parseOriginalUrl`
 * `req.sessionStore`
 * `req.sessionID`
 * `req.session`
 *
 * `res.writeHead`
 * `res.end`
 *
 * @link https://www.npmjs.com/package/express-session
 * @link: https://expressjs.com/en/guide/behind-proxies.html
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
  var config = {
    cookie: {},
    resave: true,
    saveUninitialized: false,
    secret: 'this is supposed to be a secret - right?'
  }

  if ( app.get( 'env' ) !== 'development' ) {
    app.set( 'trust proxy', true )
    config.cookie.secure = true
  }

  app.use( session( config ) )
}

module.exports = requestHandler
