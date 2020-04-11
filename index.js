const express = require('express')
const mongoose = require('mongoose');

const {createDish, getAllDishes} = require('./modules/DishModule/DishController')
const {createMenu, getAllMenus} = require('./modules/MenuModule/MenuController')

const app = express()

mongoose.connect('mongodb://127.0.0.1/event', function() {
    console.log('Connected to MongoDB')
});

app.use(express.json()) 

// Dishes Module
createDish(app)
getAllDishes(app)

// Menu Module
createMenu(app)
getAllMenus(app)


app.listen(8080, function () {console.log('Server starting...')})