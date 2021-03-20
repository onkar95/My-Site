const { Email } = require('@material-ui/icons')
const mongoose = require('mongoose')

const login = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true

    },
    email: {
        type: String,
        require: true

    },
    date: {
        type: Date,
        require: true
    }
})
module.exports =mongoose.model('user',login)