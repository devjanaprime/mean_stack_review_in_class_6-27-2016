var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoModelsSchema = new Schema({
  name: String,
  weight: Number
});

var mangoExport = mongoose.model( 'mangoExport', mongoModelsSchema );
module.exports = mangoExport;
