const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    fist_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports.Reviews = Reviews

