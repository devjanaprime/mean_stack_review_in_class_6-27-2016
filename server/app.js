var express = require('express');
var app = express();
var path = require('path');

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
