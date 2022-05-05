const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());

//using routes
app.use(require('./routes/route'))

app.listen(process.env.PORT || 4000, ()=> {
    console.log('Server is listening...');
})

