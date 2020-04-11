const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    composition: String
})

const Dishes = mongoose.model('Dishes', dishSchema)

module.exports.Dishes = Dishes