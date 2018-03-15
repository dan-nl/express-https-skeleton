/* eslint no-process-env: off */

'use strict'

var config = {
  charset: 'utf-8',
  ip_address: process.env.NODE_IP_ADDRESS || '',
  lang_default: 'en',
  morgan_debug: false,
  port: 3001,
  ssl: {
    crt: process.env.SSL_CRT.toString(),
    key: process.env.SSL_KEY.toString()
  },
  title: 'express skeleton app'
}

module.exports = config
