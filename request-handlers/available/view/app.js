'use strict'

/**
 * @param {IncomingMessage} req
 * @param {Function} req.csrfToken
 * @param {Object} req.context
 * @param {string} req.session.lang
 *
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function appContext( req, res, next ) {
  // an example of something one could do here
  // req.context.head.links.stylesheets.push( { href: '/css/css.css' } )

  // req.context.navigation = {
  //   items: [
  //     {
  //       href: '/profile',
  //       text: 'profile'
  //     },
  //     {
  //       href: '/products',
  //       text: 'products'
  //     },
  //     {
  //       classes: 'btn btn-default',
  //       href: '/logout',
  //       text: 'logout'
  //     }
  //   ]
  // }

  // req.context.partials[ 'site.navigation' ] = 'shared/site/navigation';
  next()
}

module.exports = appContext
