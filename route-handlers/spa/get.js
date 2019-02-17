'use strict'

/**
 * @param {IncomingMessage} req
 * @param {Object} req.context
 *
 * @param {ServerResponse} res
 * @param {Function} res.render
 *
 * @returns {undefined}
 */
function get( req, res ) {
  req.context.html.head.title = 'express spa'
  res.render( 'pages/spa', req.context )
}

module.exports = get
