const Schema = require('mongoose').Schema;

exports.urlSchema = new Schema({
  urlID: String,
  longUrl: String,
  shortUrl: String,
  custom: Boolean,
},
  { collection: 'urlShortener' });