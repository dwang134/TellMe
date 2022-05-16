const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const categories_model = new Schema({
    type: {type: String, default: "Investment"},
    color: {type: String, default: "#FCBE44"},
})

const Categories = mongoose.model('Categories', categories_model)

module.exports = Categories;
