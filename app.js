'use strict'

var express = require( 'express' )
var errorHandlers = require( './request-handlers/available/error-handlers' )
var requestHandlers = require( './request-handlers' )
var routes = require( './router' )

var app = express()

requestHandlers( app )
routes( app )
errorHandlers( app )

module.exports = app
