'use strict'

/**
 * adds
 * `req.csrfToken()`
 *
 * Requires either a session or cookie-parser to be initialized first
 *
 * @link https://www.npmjs.com/package/csurf
 *
 * @type {Function}
 */
var csurf = require( 'csurf' )()

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function csrf( req, res, next ) {
  if ( typeof req.csrfToken === 'function' ) {
    req.context.csrfToken = req.csrfToken()
  }

  next()
}

module.exports = [ csurf, csrf ]
