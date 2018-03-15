'use strict'

var getNumbersTrivia = require( '../../helpers/get-numbers-trivia' )

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
  req.context.head = { title: 'express http skeleton' }

  // demonstrates how one might make a call to an external service
  getNumbersTrivia()
    .then(
      /**
       * @param {Object} result
       *
       * @returns {undefined}
       */
      function ( result ) {
        req.context.trivia = JSON.parse( result.body ).text
        res.render( 'pages/home', req.context )
      }
    )
    .catch(
      /**
       * @param {Error} err
       *
       * @returns {undefined}
       */
      function ( err ) {
        req.context.trivia = err
        res.render( 'pages/home', req.context )
      }
    )
}

module.exports = get
