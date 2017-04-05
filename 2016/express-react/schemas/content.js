const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    addTime: {
        type: Date,
        default: new Date()
    },
    description: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    comments: {
        type: Array,
        default: []
    }
})