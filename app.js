const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

// Load keys
const keys = require('./config/keys');

// Map global promise
mongoose.Promise = global.Promise;

// Mongoose connect
mongoose.connect(keys.mongoURI, {
    //useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err));

var app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

// Use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});