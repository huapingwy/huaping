const mongoose = require('mongoose');
const userSchame = require('../schemas/user');

module.exports = mongoose.model('User', userSchame);