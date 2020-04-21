const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    telephone: {
        type: String, 
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    count_peoples: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    menu: {
        type: Object,
        required: true
    },
    services: {
        type: mongoose.Types.ObjectId,
        ref: 'Services',
        required: false //true
    }
})

const Orders = mongoose.model('Orders', orderSchema)

module.exports.Orders = Orders

