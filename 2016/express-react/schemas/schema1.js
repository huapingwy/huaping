const mongoose = require('mongoose');
const Schema = mongoose.Schema
module.exports = new Schema({
    title: String,
    content: String,
    date: Date.now()
});