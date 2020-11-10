const express = require('express');

const api = express();

api.get("/", (req, res) => {
    res.send('Hello World');
});

api.listen(process.env.port || 8080, err => {
    if(err) {
       return console.error(err);
    }
    console.log('Server successfully started');
});