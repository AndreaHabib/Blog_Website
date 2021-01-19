const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    },

});

module.exports = Comments = mongoose.model('comment', CommentsSchema);