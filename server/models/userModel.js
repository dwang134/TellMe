const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user_model = new Schema({
    name: {type: String, required: [true, 'Please add a name']},
    email: {type: String, required: [true, 'Please add an email'], unique: true},
    password: {type: String, required: [true, 'Please add a name']},
}, {
    timestamps: true
})

module.exports = mongoose.model('User', user_model);