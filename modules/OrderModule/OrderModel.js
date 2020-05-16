const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    telephone: {
        type: String, 
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    count_peoples: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    typeEvent: {
        type: String,
    },
    editedDishes: {
        type: Array,
    },
    services: [{
        type: mongoose.Types.ObjectId,
        ref: 'Services',
    }]
})

const Orders = mongoose.model('Orders', orderSchema)

module.exports.Orders = Orders

