const express = require('express');
const app = require('./app')
const path = require('path');

const port = 80
const publicPath = path.join(__dirname,'..' ,'public');

app.use(express.static(publicPath))

app.listen(port,()=> {
    console.log('Server is running')
})
