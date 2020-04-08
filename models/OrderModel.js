const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    fist_name: {
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
    cout_peoples: {
        type: Number,
        required: true
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    services: {
        type: mongoose.Types.ObjectId,
        ref: 'Services',
        required: true
    }
})

const Orders = mongoose.model('Orders', orderSchema)

module.exports.Orders = Orders

