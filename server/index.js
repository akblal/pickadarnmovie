const express = require('express');
const cors = require('cors');
const controller = require('./controller.js');

const path = require("path");
const app = express();

//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(cors());


//GET INDIVIDUAL USER INFORMATION from emailAddress table
app.get('/getUser', controller.getUser);

//GET EMAIL from emailAddress table
app.get('/getEmail', controller.getEmail);

//INSERT EMAIL INTO emailAddress table
app.post('/insertEmail', controller.insertEmail);

app.listen(3000,()=>{
  console.log('listening on port 3000');
})
