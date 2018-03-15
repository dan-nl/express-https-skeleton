/* eslint no-process-env: off */

'use strict'

var config = {
  expires: new Date( new Date().getTime() + ( 85 * 365 * 24 * 60 * 60 * 1000 ) ),
  keys: [ 'your', 'cookie', 'key' ],
  maxAge: 85 * 365 * 24 * 60 * 60 * 1000
}

module.exports = config
