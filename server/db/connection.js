const mongoose = require('mongoose');
require('dotenv').config();

const db = mongoose.connect(process.env.ATLAS_URI).then(db => {
  console.log('Database connected');
  return db;
}).catch(err=> {throw err});

module.exports = db;