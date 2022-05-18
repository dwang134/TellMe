const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const user_model = new Schema({
    name: {type: String, required: [true, 'Please add a name']},
    email: {type: String, required: [true, 'Please add an email'], unique: true},
    password: {type: String, required: [true, 'Please add a name']},
}, {
    timestamps: true
})

const User = mongoose.model('User', user_model);

module.exports = User;