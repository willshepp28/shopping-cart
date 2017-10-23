"use strict";

const express = require('express'),
    app = express(),
    path = require('path');





app.use(express.static('public'));



app.use('/', function(request,response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})




app.listen(3000, function(request,response){
    console.log('Server listening on port 3000');
});