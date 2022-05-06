const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

//using routes
app.use(require('./routes/route'));

//database connection
const db = require('./db/connection.js');

db.then(connection=> {  
    if (!connection) return process.exit;

    //listen to http server 
    app.listen(process.env.PORT || 4000, ()=> {
        console.log('Server is listening...');
    })

}).catch(err=> {throw err});



