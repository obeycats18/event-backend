const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dishes: [{
        type: mongoose.Types.ObjectId,
        ref: "Dishes"
    }]
})

const Menu = mongoose.model('Menu', menuSchema)

module.exports.Menu = Menu