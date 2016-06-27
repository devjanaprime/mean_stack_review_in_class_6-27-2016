var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// needs to be here (prior to route declarations) as it global
app.use( bodyParser.json() );
var mongoose = require('mongoose');
mongoose.connect( 'localhost:27017/myTastyMangoDB' );
var returnedModel = require('../models/mongoModels.js');

// base url
app.get( '/', function( req, res ){
  console.log( 'in base url' );
  res.sendFile( path.resolve( 'views/index.html' ) );
});

// spin up server
app.listen( 8082, 'localhost', function( req, res ){
  console.log( 'server up on 8082' );
});

// static folder set to public
app.use( express.static( 'public' ) );
