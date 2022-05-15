const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const categories_model = new Schema({
    type: {type: String, default: "Investment"},
    color: {type: String, default: "#FCBE44"},
})

const transaction_model= new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    desc: {type: String, default: "Anonymous"},
    type: {type: String, default: "Investment"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const user_model = new Schema({
    name: {type: String, required: [true, 'Please add a name']},
    email: {type: String, required: [true, 'Please add an email']},
    password: {type: String, required: [true, 'Please add a password']}
}, {
    timestamps: true
})

const Categories = mongoose.model('Categories', categories_model)
const Transaction = mongoose.model('Transaction', transaction_model)
const User = mongoose.model('User', user_model);

exports.default= Transaction;
module.exports = {
    Categories,
    Transaction,
    User
}