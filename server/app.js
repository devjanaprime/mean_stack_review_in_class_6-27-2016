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

// return all mangoes
app.get( '/getMangoes', function( req, res ){
  console.log( 'in getMangoes' );
  returnedModel.find().then( function( data ){
    res.send( data );
  }); // end find model
});

// spin up server
app.listen( 8082, 'localhost', function( req, res ){
  console.log( 'server up on 8082' );
});

// add mango route
app.post( '/addMango', function( req, res ){
  // check that data is coming through
  console.log( 'in addMango: ' + req.body.name );
  // save new record to db
  var objectToSave={
    name: req.body.name,
    weight: req.body.weight
  };
  var newMango=returnedModel( objectToSave );
  newMango.save();
  res.send( true );
});

// static folder set to public
app.use( express.static( 'public' ) );
