const mongoose = require('mongoose');
const schame = require('../schemas/category');

module.exports = mongoose.model('Category', schame);