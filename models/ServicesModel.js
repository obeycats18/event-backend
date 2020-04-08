const mongoose = require('mongoose')

const Schema = mongoose.Schema

const servicesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    }
})

const Services = mongoose.model('Services', servicesSchema)

module.exports.Services = Services
