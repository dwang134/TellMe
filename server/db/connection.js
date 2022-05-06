const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.ATLAST_URI

const db = mongoose.connect(process.env.ATLAS_URI).then(db => {
  console.log('Database connected');
  return db;
}).catch(err=> {throw err});

module.exports = db;