const express = require('express');
const app = express();
const urls = require('./urls');
const retrieve = require('./retrieve');
var cors = require('cors');


const mongoose = require('mongoose');
//const cookieParse = require('cookie-parser')

// This is the default address for MongoDB.
// Make sure MongoDB is running!
const mongoEndpoint = process.env.MONGODB_URI || 'mongodb://127.0.0.1/urlShortener';

// useNewUrlParser is not required, but the old parser is deprecated
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });
// Get the connection string
const db = mongoose.connection;

// This will create the connection, and throw an error if it doesn't work
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', retrieve);
app.use('/api', urls);

app.listen(3001, function () {
    console.log('Starting server');
});