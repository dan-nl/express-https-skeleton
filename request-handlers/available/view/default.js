/* eslint no-process-env: off */

'use strict'

var config = require( '../../../config/app' )

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
function defaultContext( req, res, next ) {
  req.context = {
    env: process.env.NODE_ENV,
    html: {
      body: {
        scripts: {
          inline: '',
          src: [
            { src: 'js/app.js' }
          ]
        }
      },
      head: {
        links: {
          stylesheets: [
            { href: 'css/app.css' }
          ]
        },
        meta: {
          charset: config.charset
        },
        style: '',
        title: config.title
      },
      lang: config.lang_default
    },
    partials: {
      'html.body': 'html/body',
      'html.body.scripts': 'html/body/scripts',
      'html.body.scripts.inline': 'html/body/scripts/inline',
      'html.body.scripts.src': 'html/body/scripts/src',
      'html.close': 'html/close',
      'html.head': 'html/head',
      'html.head.links': 'html/head/links',
      'html.head.links.stylesheets': 'html/head/links/stylesheets',
      'html.head.meta': 'html/head/meta',
      'html.head.meta.default': 'html/head/meta/default',
      'html.head.style': 'html/head/style',
      'html.head.title': 'html/head/title',
      'html.open': 'html/open'
    }
  }

  if ( req.session && req.session.lang ) {
    req.context.lang = req.session.lang
  }

  next()
}

module.exports = defaultContext
