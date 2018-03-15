'use strict'

var express = require( 'express' )
var errorHandlers = require( './request-handlers/error-handlers' )
var requestHandlers = require( './request-handlers/index' )
var routes = require( './router/index' )

var app = express()

requestHandlers( app )
routes( app )
errorHandlers( app )

module.exports = app
