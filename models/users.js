const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    googleID: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }
});

// Create collection and add Schema
mongoose.model('users', UserSchema)