const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const transaction_model= new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    desc: {type: String, default: "Anonymous"},
    type: {type: String, default: "Investment"},
    amount: {type: Number},
    date: {type: Date, default: Date.now}
})

const Transaction = mongoose.model('Transaction', transaction_model)

module.exports = Transaction;