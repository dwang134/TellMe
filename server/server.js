const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//middleware
//not block incoming api call and send it to backend
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//using routes
app.use(require('./routes/route'));

//database connection
mongoose.connect(process.env.ATLAS_URI).catch(err=> {console.log(err)});

app.listen(process.env.PORT || 4000, ()=> {
    console.log('Server is listening...');
})
