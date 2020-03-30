const express = require('express');
const mongoose = require('mongoose');

var app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});