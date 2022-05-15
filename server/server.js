const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//middleware
//not block incoming api call and send it to backend
app.use(cors({
    origin: 'https://tell-me-frontend.vercel.app'
}));
app.use(express.json());

//using routes
app.use(require('./routes/route'));

//database connection
mongoose.connect(process.env.ATLAS_URI).catch(err=> {console.log(err)});

app.listen(process.env.PORT || 4000, ()=> {
    console.log('Server is listening...');
})
