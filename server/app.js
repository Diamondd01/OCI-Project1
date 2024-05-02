const bodyParser = require('express')
const express = require('express');
const pool = require('./db')

const path = require('path')

const app = express();

// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

// api router
app.use('/test',(req,res,next)=>{
  res.send('here')
  console.log('middlware for url')
  next()
});


module.exports = app;