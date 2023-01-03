const mongoose = require('mongoose');

//schema represent what our data Is.
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    decription: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema ) //giving the name and the schmea to mongoose db